import { Component, JSX } from 'solid-js';
import { Configurator } from '../components/Configurator/Configurator';
import { Slider } from '../lib/index';

export const SliderDemo: Component = (): JSX.Element => (
  <Configurator
    config={{
      component: Slider,
      props: [
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
          defaultValue: 'md',
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
