import { Component, JSX } from 'solid-js';
import { DefaultProps } from '../DefaultProps';
import { cx } from '../utils';
import styles from './UnstyledButton.module.css';

export interface UnstyledButtonProps extends DefaultProps {
  onClick?: (event: MouseEvent) => void;
  children: JSX.Element;
}

export const UnstyledButton: Component<UnstyledButtonProps> = (props: UnstyledButtonProps): JSX.Element => (
  <button class={cx(styles.button, props.class)} onClick={props.onClick}>
    {props.children}
  </button>
);
