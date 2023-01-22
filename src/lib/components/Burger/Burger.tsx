import { Component, JSX } from 'solid-js';
import { ColorProps, getColorClass } from '../Color';
import { DefaultProps, NumberSize } from '../DefaultProps';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import { cx } from '../utils';
import styles from './Burger.module.css';

export interface BurgerProps extends DefaultProps, ColorProps {
  opened: boolean;
  size?: NumberSize;
  onClick?: (event: MouseEvent) => void;
}

export const Burger: Component<BurgerProps> = (props: BurgerProps): JSX.Element => (
  <UnstyledButton
    class={cx(styles.root, getColorClass(props.color, 'black'), props.class)}
    style={props.style}
    onClick={props.onClick}
  >
    <div data-opened={props.opened} class={styles.burger} />
  </UnstyledButton>
);
