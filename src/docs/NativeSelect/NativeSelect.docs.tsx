import { Component, JSX } from 'solid-js';
import { NativeSelect, Title } from '../../index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
  component: NativeSelect,
  props: [
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      defaultValue: 'Select your favorite framework/library',
    },
    {
      name: 'description',
      type: 'string',
      label: 'Description',
      defaultValue: 'This is anonymous',
    },
    {
      name: 'error',
      type: 'string',
      label: 'Error',
      defaultValue: '',
    },
    {
      name: 'data',
      type: 'hidden',
      label: 'Data',
      defaultValue: ['React', 'Vue', 'Angular', 'Solid'],
    },
  ],
};

export const NativeSelectDocs: Component = (): JSX.Element => (
  <DocPage
    title="NativeSelect"
    subtitle="Capture user feedback limited to large set of options"
    usage={
      <div>
        <Title order={2}>Usage</Title>
        <Configurator config={config} />
      </div>
    }
  />
);
