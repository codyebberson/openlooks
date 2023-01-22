import { Component, JSX } from 'solid-js';
import { Container, Tabs, Text, Title } from '../../lib/index';
import styles from './DocPage.module.css';

interface DocTabProps {
  value: string;
  children: JSX.Element;
}

const DocTab: Component<DocTabProps> = (props: DocTabProps): JSX.Element => {
  return (
    <Tabs.Panel value={props.value}>
      <div class={styles.docpage}>
        <div class={styles.main}>{props.children}</div>
        <div class={styles.toc}>
          <nav>Table of contents</nav>
        </div>
      </div>
    </Tabs.Panel>
  );
};

export interface DocPageProps {
  title: string;
  subtitle: string;
  children: JSX.Element;
}

export const DocPage: Component<DocPageProps> = (props: DocPageProps): JSX.Element => {
  return (
    <div class={styles.page}>
      <Container>
        <Title order={1} class={styles.title}>
          {props.title}
        </Title>
        <Text class={styles.subtitle}>{props.subtitle}</Text>
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
        <DocTab value="docs">{props.children}</DocTab>
        <DocTab value="props">
          <Title order={2}>Component Props</Title>
        </DocTab>
        <DocTab value="styles">
          <Title order={2}>Styles</Title>
        </DocTab>
      </Tabs>
    </div>
  );
};
