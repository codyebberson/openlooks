import { Component, JSX } from 'solid-js';
import { Container, Tabs } from '../../index';
import styles from './DocPage.module.css';

interface DocTabProps {
  value: string;
  children: JSX.Element;
}

const DocTab: Component<DocTabProps> = (props: DocTabProps): JSX.Element => {
  return (
    <Tabs.Panel value={props.value}>
      <div class={styles.docpage}>
        <Container>{props.children}</Container>
      </div>
    </Tabs.Panel>
  );
};

export interface DocPageProps {
  title: string;
  subtitle: string;
  usage: JSX.Element;
}

export const DocPage: Component<DocPageProps> = (props: DocPageProps): JSX.Element => {
  return (
    <div class={styles.page}>
      <Container>
        <h1 class={styles.title}>{props.title}</h1>
        <p class={styles.subtitle}>{props.subtitle}</p>
      </Container>
      <Tabs value="docs">
        <Tabs.List class={styles.tablist}>
          <Container>
            <Tabs.Tab class={styles.tab} value="docs">
              Documentation
            </Tabs.Tab>
            <Tabs.Tab class={styles.tab} value="props">
              Component props
            </Tabs.Tab>
            <Tabs.Tab class={styles.tab} value="styles">
              Styles API
            </Tabs.Tab>
          </Container>
        </Tabs.List>
        <DocTab value="docs">{props.usage}</DocTab>
        <DocTab value="props">
          <h2>Component Props</h2>
        </DocTab>
        <DocTab value="styles">
          <h2>Styles</h2>
        </DocTab>
      </Tabs>
    </div>
  );
};
