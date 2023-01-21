import { Component, JSX } from 'solid-js';
import colors from '../colors.module.css';
import { cx } from '../utils';
import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  color?:
    | 'black'
    | 'gray'
    | 'red'
    | 'pink'
    | 'grape'
    | 'violet'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  class?: string;
  onClick?: () => void;
  children: JSX.Element;
}

export const Button: Component<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const className = (): string =>
    cx(
      styles.button,
      colors[props.color || 'blue'],
      styles[props.variant || 'filled'],
      styles[props.size || 'sm'],
      styles['r' + (props.radius || 'sm')],
      props.class
    );
  return (
    <button class={className()} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
