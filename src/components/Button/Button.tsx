import { Component, JSX } from 'solid-js';
import { cx } from '../utils';
import styles from './Button.module.css';

export interface ButtonProps {
  color?: string;
  children: JSX.Element;
}

export const Button: Component<ButtonProps> = (props: ButtonProps): JSX.Element => {
  return <button class={cx(styles.button, props.color && styles[props.color])}>{props.children}</button>;
};
