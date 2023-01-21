import { Component, JSX } from 'solid-js';
import { Text, TextProps } from '../Text/Text';

export interface TitleProps extends TextProps {
  order: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: Component<TitleProps> = (props: TitleProps): JSX.Element => {
  return (
    <Text component={('h' + props.order) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} {...props}>
      {props.children}
    </Text>
  );
};
