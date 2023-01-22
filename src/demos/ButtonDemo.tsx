import { Component, JSX } from 'solid-js';
import { Configurator } from '../components/Configurator/Configurator';
import { Button } from '../lib/index';

export const ButtonDemo: Component = (): JSX.Element => (
  <Configurator
    config={{
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
    }}
  />
);
