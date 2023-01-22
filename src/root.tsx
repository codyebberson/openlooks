// @refresh reload
import { Component, JSX, Suspense } from 'solid-js';
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from 'solid-start';
import { Logo } from './components/Logo';
import { Anchor, AppShell, Group, Header, Navbar, NotificationProvider, TextInput } from './lib/index';

import styles from './App.module.css';
import './root.css';

const sections = [
  {
    name: 'Layout',
    components: [
      'AppShell',
      'AspectRatio',
      'Center',
      'Container',
      'Flex',
      'Grid',
      'Group',
      'MediaQuery',
      'SimpleGrid',
      'Space',
      'Stack',
    ],
  },
  {
    name: 'Buttons',
    components: ['ActionIcon', 'Button', 'CloseButton', 'CopyButton', 'FileButton', 'UnstyledButton'],
  },
  {
    name: 'Inputs',
    components: ['NativeSelect', 'Slider', 'TextInput'],
  },
  {
    name: 'Navigation',
    components: ['Anchor', 'Tabs'],
  },
  {
    name: 'Data display',
    components: [
      'Accordion',
      'Avatar',
      'BackgroundImage',
      'Badge',
      'Card',
      'ColorSwatch',
      'Image',
      'Indicator',
      'Kbd',
      'Spoiler',
      'ThemeIcon',
      'Timeline',
    ],
  },
  {
    name: 'Typography',
    components: ['Blockquote', 'Code', 'Highlight', 'List', 'Mark', 'Table', 'Text', 'Title'],
  },
  {
    name: 'Feedback',
    components: ['Alert', 'Loader', 'Notification', 'Progress', 'RingProgress', 'Skeleton'],
  },
  {
    name: 'Miscellaneous',
    components: ['Box', 'Collapse', 'Divider', 'FocusTrap', 'Paper', 'Portal', 'ScrollArea', 'Transition'],
  },
];

const MyHeader: Component = (): JSX.Element => (
  <Header>
    <div style={{ display: 'flex', 'align-items': 'center', gap: '8px' }}>
      <Logo />
      <Anchor href="/">OpenLooks</Anchor>
    </div>
    <Group>
      <TextInput placeholder="Search" />
    </Group>
  </Header>
);

const MyNavbar: Component = (): JSX.Element => (
  <Navbar>
    <div class={styles.navlinks}>
      {sections.map((s) => (
        <>
          <div class={styles.section}>{s.name}</div>
          {s.components.map((c) => (
            <A class={styles.navlink} activeClass={styles.active} href={`/${c.toLowerCase()}`}>
              {c}
            </A>
          ))}
        </>
      ))}
    </div>
  </Navbar>
);

const Root: Component = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <Title>OpenLooks</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href="/favicon.png" />
      </Head>
      <Body>
        <NotificationProvider>
          <ErrorBoundary>
            <AppShell header={<MyHeader />} navbar={<MyNavbar />}>
              <Suspense>
                <Routes>
                  <FileRoutes />
                </Routes>
              </Suspense>
            </AppShell>
          </ErrorBoundary>
        </NotificationProvider>
        <Scripts />
      </Body>
    </Html>
  );
};

export default Root;
