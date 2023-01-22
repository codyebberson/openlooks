import { Component, JSX } from 'solid-js';
import { DefaultProps, NumberSize } from '../DefaultProps';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import { cx } from '../utils';
import styles from './Burger.module.css';

export interface BurgerProps extends DefaultProps {
  opened: boolean;
  color?: string;
  size?: NumberSize;
  onClick?: (event: MouseEvent) => void;
}

export const Burger: Component<BurgerProps> = (props: BurgerProps): JSX.Element => (
  <UnstyledButton class={cx(styles.root, props.class)} style={props.style} onClick={props.onClick}>
    <div data-opened={props.opened} class={styles.burger} />
  </UnstyledButton>
);
