import { Component, createSignal, For, JSX } from 'solid-js';
import { randomId } from '../../hooks/use-id';
import { Notification, NotificationProps } from '../Notification/Notification';
import styles from './NotificationProvider.module.css';

export interface NotificationProviderProps {
  children: JSX.Element;
}

const [notifications, setNotifications] = createSignal<NotificationProps[]>([]);

export const NotificationProvider: Component<NotificationProviderProps> = (
  props: NotificationProviderProps
): JSX.Element => {
  return (
    <>
      {props.children}
      <div class={styles.container}>
        <For each={notifications()}>
          {(notification) => <Notification {...notification}>{notification.message}</Notification>}
        </For>
      </div>
    </>
  );
};

export function showNotification(n: NotificationProps): void {
  n.id = n.id || randomId();
  setNotifications([...notifications(), n]);
  if (n.autoClose !== false) {
    window.setTimeout(() => hideNotification(n.id as string), n.autoClose || 3000);
  }
}

export function hideNotification(id: string): void {
  const n = notifications().find((n) => n.id === id);
  if (n) {
    setNotifications(notifications().filter((n) => n.id !== id));
    if (n.onClose) {
      n.onClose();
    }
  }
}
