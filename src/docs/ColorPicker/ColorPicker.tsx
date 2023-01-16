import { Component, JSX } from 'solid-js';
import { InputWrapper } from '../../components/InputWrapper/InputWrapper';
import { useId } from '../../hooks/use-id';
import styles from './ColorPicker.module.css';

export interface ColorPickerProps {
  id?: string;
  name?: string;
  label?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
}

export const colors = [
  'black',
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
];

export const ColorPicker: Component<ColorPickerProps> = (props: ColorPickerProps): JSX.Element => {
  const id = useId(props.id);
  const name = useId(props.name);
  const defaultValue = props.defaultValue || 'blue';

  function handleChange(e: Event & { currentTarget: HTMLInputElement }): void {
    if (props.onChange) {
      props.onChange(e.currentTarget.value);
    }
  }

  return (
    <InputWrapper id={id} label={props.label}>
      <div class={styles.colors}>
        {colors.map((color) => (
          <>
            <input
              type="radio"
              id={`${id}-${color}`}
              name={name}
              value={color}
              checked={color === defaultValue}
              onChange={handleChange}
            />
            <label
              for={`${id}-${color}`}
              style={{ 'background-color': color === 'black' ? 'black' : `var(--oc-${color}-6)` }}
            >
              ✓
            </label>
          </>
        ))}
      </div>
    </InputWrapper>
  );
};
