import { Component, JSX, Show } from 'solid-js';
import { Button } from '../Button/Button';
import { ColorProps, getColorClass } from '../Color';
import { hideNotification } from '../NotificationProvider/NotificationProvider';
import { Text } from '../Text/Text';
import { cx } from '../utils';
import styles from './Notification.module.css';

export interface NotificationProps extends ColorProps {
  id?: string;
  icon?: JSX.Element;
  title: string;
  message?: string;
  children?: JSX.Element;
  autoClose?: number | false;
  disallowClose?: boolean;
  onClose?: () => void;
}

export const Notification: Component<NotificationProps> = (props: NotificationProps): JSX.Element => {
  return (
    <div class={styles.notification}>
      <div class={styles.prefix}>
        <div class={cx(getColorClass(props.color, 'blue'), styles.bar)} />
      </div>
      <div class={styles.content}>
        <Text weight={500}>{props.title}</Text>
        {props.children && <Text color="gray">{props.children}</Text>}
      </div>
      <Show when={!props.disallowClose}>
        <div class={styles.close}>
          <Button onClick={() => hideNotification(props.id as string)} variant="subtle" color="gray" size="xs">
            ✕
          </Button>
        </div>
      </Show>
    </div>
  );
};
