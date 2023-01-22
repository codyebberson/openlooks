import styles from './Color.module.css';
import { getClass } from './utils';

export type Color =
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

export interface ColorProps {
  color?: Color;
}

export const getColorClass = (color: Color | undefined, defaultColor?: Color | undefined): string | undefined =>
  getClass(styles, color || defaultColor);
