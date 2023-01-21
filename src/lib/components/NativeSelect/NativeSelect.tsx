import { Component, For } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';
import { useId } from '../../hooks/use-id';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import { cx } from '../utils';
import styles from './NativeSelect.module.css';

export interface SelectItem {
  value: string;
  label?: string;
}

interface OptionProps {
  value: string | SelectItem;
}

const Option: Component<OptionProps> = (props: OptionProps): JSX.Element => {
  if (typeof props.value === 'string') {
    return <option value={props.value}>{props.value}</option>;
  }
  return <option value={props.value.value}>{props.value.label || props.value.value}</option>;
};

export interface NativeSelectProps {
  id?: string;
  name?: string;
  label?: string;
  description?: string;
  error?: string;
  class?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  data: (string | SelectItem)[];
  onChange?: (event: Event & { currentTarget: HTMLSelectElement }) => void;
}

export const NativeSelect: Component<NativeSelectProps> = (props: NativeSelectProps): JSX.Element => {
  const id = useId(props.id);
  return (
    <InputWrapper
      id={id}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <select
        class={cx(styles.select, props.class)}
        aria-invalid={!!props.error}
        id={id}
        name={props.name}
        required={props.required}
        onChange={props.onChange}
        value={props.defaultValue}
      >
        <For each={props.data}>{(item) => <Option value={item} />}</For>
      </select>
    </InputWrapper>
  );
};
