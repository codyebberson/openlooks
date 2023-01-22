import { JSX } from 'solid-js';

export type NumberSize = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface DefaultProps {
  class?: string;
  style?: JSX.CSSProperties;

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
