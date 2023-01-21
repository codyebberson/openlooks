import { Component, JSX } from 'solid-js';
import { Button, Title } from '../../lib/index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
  component: Button,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      data: ['filled', 'light', 'outline', 'subtle'],
      defaultValue: 'filled',
    },
    {
      name: 'color',
      type: 'color',
      label: 'Color',
    },
    {
      name: 'radius',
      type: 'select',
      label: 'Radius',
      data: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'sm',
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      data: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'sm',
    },
    {
      name: 'children',
      type: 'string',
      label: 'Children',
      defaultValue: 'Settings',
    },
  ],
};

export const ButtonDocs: Component = (): JSX.Element => (
  <DocPage
    title="Button"
    subtitle="Render button or link with button styles from mantine theme"
    usage={
      <div>
        <Title order={2}>Usage</Title>
        <Configurator config={config} />
      </div>
    }
  />
);
