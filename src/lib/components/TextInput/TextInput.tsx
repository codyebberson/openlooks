import { Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { useId } from '../../hooks/use-id';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { cx } from '../utils';
import styles from './TextInput.module.css';

export interface TextInputProps {
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  error?: string;
  class?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: Event & { currentTarget: HTMLInputElement }) => void;

  // TODO
  icon?: JSX.Element;
}

export const TextInput: Component<TextInputProps> = (props: TextInputProps): JSX.Element => {
  const id = useId(props.id);
  return (
    <InputWrapper
      id={id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <input
        type={props.type || 'text'}
        class={cx(styles.input, props.class)}
        aria-invalid={!!props.error}
        id={id}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        value={props.defaultValue || ''}
        onChange={props.onChange}
      />
    </InputWrapper>
  );
};
