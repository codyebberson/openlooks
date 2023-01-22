// @refresh reload
import { Component, createSignal, JSX, Suspense } from 'solid-js';
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from 'solid-start';
import { Header } from './components/Header/Header';
import { AppShell, Navbar, NotificationProvider } from './lib/index';

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
    components: ['Anchor', 'Burger', 'Tabs'],
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
  const [opened, setOpened] = createSignal(true);
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
            <AppShell
              header={<Header opened={opened()} toggleOpened={() => setOpened(!opened())} />}
              navbar={opened() && <MyNavbar />}
            >
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
