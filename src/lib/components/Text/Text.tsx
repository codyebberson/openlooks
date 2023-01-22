import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { ColorProps, getColorClass } from '../Color';
import { cx } from '../utils';
import styles from './Text.module.css';

export type TextComponent = 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TextProps extends ColorProps {
  component?: TextComponent;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  class?: string;
  children: JSX.Element;
}

export const Text: Component<TextProps> = (props: TextProps): JSX.Element => {
  const component = (): TextComponent => props.component || 'div';
  const className = (): string =>
    cx(
      styles.text,
      props.size && styles[props.size],
      getColorClass(props.color),
      props.weight && styles['w' + props.weight],
      props.class
    );
  return (
    <Dynamic component={component()} class={className()}>
      {props.children}
    </Dynamic>
  );
};
