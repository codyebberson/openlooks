import { JSX } from 'solid-js';
import { Color, getColorClass } from './Color';
import styles from './DefaultProps.module.css';
import { cx, getClass } from './utils';

export type NumberSize = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface DefaultProps {
  class?: string;
  style?: JSX.CSSProperties;

  color?: Color;
  radius?: NumberSize;

  m?: NumberSize;
  my?: NumberSize;
  mx?: NumberSize;
  mt?: NumberSize;
  mb?: NumberSize;
  ml?: NumberSize;
  mr?: NumberSize;

  p?: NumberSize;
  py?: NumberSize;
  px?: NumberSize;
  pt?: NumberSize;
  pb?: NumberSize;
  pl?: NumberSize;
  pr?: NumberSize;
}

/**
 * Set of system property names.
 * Ideally TypeScript could generate this for us, but that is not available yet.
 * See: https://stackoverflow.com/questions/43909566/get-keys-of-a-typescript-interface-as-array-of-strings
 */
const systemProps = new Set([
  'class',
  'style',
  'color',
  'radius',
  'm',
  'my',
  'mx',
  'mt',
  'mb',
  'ml',
  'mr',
  'p',
  'py',
  'px',
  'pt',
  'pb',
  'pl',
  'pr',
]);

export function getSystemClassName<T extends { [key: string]: any }>(
  others: DefaultProps & T,
  defaultColor?: Color
): string {
  const classes: (string | undefined)[] = [];
  for (const [key, value] of Object.entries(others)) {
    if (key === 'class') {
      classes.push(value as string);
    } else if (key === 'color') {
      classes.push(getColorClass(value as Color, defaultColor));
    } else if (systemProps.has(key)) {
      classes.push(getClass(styles, `${key}-${value}`));
    }
  }
  return cx(...classes);
}
