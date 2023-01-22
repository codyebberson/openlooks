import { Component, JSX } from 'solid-js';
import { Box, BoxProps } from '../Box/Box';
import { cx } from '../utils';
import styles from './Button.module.css';

export interface ButtonProps extends Omit<BoxProps<'button'>, 'component'> {
  variant?: 'filled' | 'light' | 'outline' | 'subtle';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export const Button: Component<ButtonProps> = (props: ButtonProps): JSX.Element => {
  const className = (): string => cx(styles.button, styles[props.variant || 'filled'], styles[props.size || 'sm']);
  const baseProps = (): BoxProps<'button'> => ({ color: 'blue', ...props });
  return (
    <Box component="button" class={className()} onClick={props.onClick} {...baseProps()}>
      {props.children}
    </Box>
  );
};
