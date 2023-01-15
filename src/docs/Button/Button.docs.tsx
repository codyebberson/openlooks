import { Component, JSX } from 'solid-js';
import { Button } from '../../index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
  component: Button,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      data: ['', 'filled', 'unstyled'],
    },
    {
      name: 'color',
      type: 'select',
      label: 'Color',
      data: ['', 'black', 'gray', 'red'],
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
        <h2>Usage</h2>
        <Configurator config={config} />
      </div>
    }
  />
);
