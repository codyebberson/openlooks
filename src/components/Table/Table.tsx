import { Component, JSX } from 'solid-js';
import styles from './Table.module.css';

export interface TableProps {
  children: JSX.Element;
}

export const Table: Component<TableProps> = (props: TableProps): JSX.Element => {
  return <table class={styles.table}>{props.children}</table>;
};
