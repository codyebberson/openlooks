import { Component, JSX } from 'solid-js';
import { Slider, Title } from '../../index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
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
};

export const SliderDocs: Component = (): JSX.Element => (
  <DocPage
    title="Slider"
    subtitle="Capture user feedback from a range of values"
    usage={
      <div>
        <Title order={2}>Usage</Title>
        <Configurator config={config} />
      </div>
    }
  />
);
