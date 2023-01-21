import { Component, JSX } from 'solid-js';
import { Anchor } from '../../lib/index';
import { DocPage } from '../DocPage/DocPage';

export const AnchorDocs: Component = (): JSX.Element => (
  <DocPage
    title="Anchor"
    subtitle="Display links with theme styles"
    usage={
      <div>
        <Anchor href="https://www.medplum.com">Medplum</Anchor>
      </div>
    }
  />
);
