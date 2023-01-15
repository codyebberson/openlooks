import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import styles from './InputWrapper.module.css';

export interface InputWrapperProps {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: JSX.Element;
}

export const InputWrapper: Component<InputWrapperProps> = (props: InputWrapperProps): JSX.Element => {
  return (
    <div class={styles.wrapper}>
      {props.label && (
        <label for={props.id} class={styles.label}>
          {props.label}
        </label>
      )}
      {props.description && <div class={styles.description}>{props.description}</div>}
      {props.children}
      {props.error && <div class={styles.error}>{props.error}</div>}
    </div>
  );
};
