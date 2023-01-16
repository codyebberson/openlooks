import { Component, createSignal, JSX } from 'solid-js';
import { useId } from '../../hooks/use-id';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import styles from './Slider.module.css';

export interface SliderProps {
  id?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
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
  defaultValue?: number;
  children: JSX.Element;
}

export const Slider: Component<SliderProps> = (props: SliderProps): JSX.Element => {
  const id = useId(props.id);
  const [value, setValue] = createSignal(props.defaultValue || 0);
  // const className = (): string =>
  //   cx(
  //     styles.slider,
  //     colors[props.color || 'blue'],
  //     styles[props.size || 'sm'],
  //     styles['r' + (props.radius || 'sm')],
  //     props.class
  //   );
  // return <button class={className()}>{props.children}</button>;
  return (
    <InputWrapper
      id={id}
      class={styles.wrapper}
      label={props.label}
      description={props.description}
      error={props.error}
      required={props.required}
    >
      <div class={styles.track}>
        <div class={styles.bar} style={{ width: `${value()}%` }} />
        <div
          class={styles.thumb}
          style={{ left: `${value()}%` }}
          tabindex="0"
          role="slider"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={value()}
        />
      </div>
      <input
        class={styles.input}
        id={id}
        type="range"
        min="0"
        max="100"
        step="25"
        value={value()}
        onInput={(e) => setValue(e.currentTarget.valueAsNumber)}
        onChange={(e) => setValue(e.currentTarget.valueAsNumber)}
      />
    </InputWrapper>
  );
};
