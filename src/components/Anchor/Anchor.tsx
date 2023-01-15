import { A, AnchorProps } from '@solidjs/router';
import { Component, JSX } from 'solid-js';
import { cx } from '../utils';
import styles from './Anchor.module.css';

export const Anchor: Component<AnchorProps> = (props: AnchorProps): JSX.Element => {
  return (
    <A class={cx(styles.anchor, props.class)} {...props}>
      {props.children}
    </A>
  );
};
