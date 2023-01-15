import { Component, JSX } from 'solid-js';
import { TextInput } from '../../index';
import { Configurator, ConfiguratorConfig } from '../Configurator/Configurator';
import { DocPage } from '../DocPage/DocPage';

const config: ConfiguratorConfig = {
  component: TextInput,
  props: [
    {
      name: 'placeholder',
      type: 'string',
      label: 'Placeholder',
      defaultValue: 'Your name',
    },
    {
      name: 'label',
      type: 'string',
      label: 'Label',
      defaultValue: 'Full name',
    },
    {
      name: 'description',
      type: 'string',
      label: 'Description',
      defaultValue: '',
    },
    {
      name: 'error',
      type: 'string',
      label: 'Error',
      defaultValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      data: ['', 'filled', 'unstyled'],
    },
  ],
};

export const TextInputDocs: Component = (): JSX.Element => (
  <DocPage
    title="TextInput"
    subtitle="Capture string input from user"
    usage={
      <div>
        <h2>Usage</h2>
        <Configurator config={config} />
      </div>
    }
  />
);
