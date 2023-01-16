import { Component, createSignal, JSX } from 'solid-js';
import { NativeSelect, Stack, TextInput } from '../../index';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import styles from './Configurator.module.css';

export interface ConfiguratorConfig {
  component: any;
  props: ConfiguratorProperty[];
}

export interface ConfiguratorProperty {
  name: string;
  label: string;
  type: 'string' | 'number' | 'boolean' | 'select' | 'color' | 'hidden';
  data?: string[];
  defaultValue?: any;
}

export interface ConfiguratorProps {
  config: ConfiguratorConfig;
}

export const Configurator: Component<ConfiguratorProps> = (props: ConfiguratorProps): JSX.Element => {
  const ComponentClass = props.config.component;
  const [componentProps, setComponentProps] = createSignal(getDefaultProps(props.config));

  function setProperty(name: string, value: string): void {
    setComponentProps({ ...componentProps(), [name]: value });
  }

  return (
    <div class={styles.wrapper}>
      <div class={styles.main}>
        <ComponentClass {...componentProps()} />
      </div>
      <div class={styles.controls}>
        <Stack>
          {props.config.props.map((prop) => {
            switch (prop.type) {
              case 'string':
                return (
                  <TextInput
                    name={prop.name}
                    label={prop.label}
                    defaultValue={prop.defaultValue}
                    onChange={(e) => setProperty(prop.name, e.currentTarget.value)}
                  />
                );
              case 'select':
                return (
                  <NativeSelect
                    name={prop.name}
                    label={prop.label}
                    defaultValue={prop.defaultValue}
                    data={prop.data as string[]}
                    onChange={(e) => setProperty(prop.name, e.currentTarget.value)}
                  />
                );
              case 'color':
                return (
                  <ColorPicker
                    name={prop.name}
                    label={prop.label}
                    defaultValue={prop.defaultValue}
                    onChange={(color) => setProperty(prop.name, color)}
                  />
                );
            }
          })}
        </Stack>
      </div>
    </div>
  );
};

function getDefaultProps(config: ConfiguratorConfig): Record<string, unknown> {
  const defaultProps: Record<string, unknown> = {};
  config.props.forEach((prop) => {
    defaultProps[prop.name] = prop.defaultValue;
  });
  return defaultProps;
}
