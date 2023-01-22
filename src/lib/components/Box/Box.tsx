import { Component, ComponentProps, JSX, ValidComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { DefaultProps, getSystemClassName } from '../DefaultProps';

// https://github.com/solidjs/solid/issues/1493
// export type BoxProps<T extends ValidComponent> = DynamicProps<T> & DefaultProps;

export type BoxProps<T extends ValidComponent, P = ComponentProps<T>> = {
  [K in keyof P]: P[K];
} & {
  component?: T | undefined;
} & DefaultProps;

export const Box: Component<BoxProps<ValidComponent>> = (props: BoxProps<ValidComponent>): JSX.Element => {
  const component = props.component || 'div';
  const className = (): string => getSystemClassName(props);
  return (
    <Dynamic component={component} class={className()} {...props}>
      {props.children}
    </Dynamic>
  );
};
