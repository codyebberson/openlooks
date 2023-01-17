import { Component, createSignal, JSX, onMount } from 'solid-js';
import { clamp, cx, killEvent } from '../utils';
import styles from './ScrollArea.module.css';

export interface ScrollAreaProps {
  class?: string;
  children: JSX.Element;
}

export interface Point2D {
  x: number;
  y: number;
}

export const ScrollArea: Component<ScrollAreaProps> = (props: ScrollAreaProps): JSX.Element => {
  // eslint-disable-next-line prefer-const
  let containerRef: HTMLDivElement | undefined = undefined;

  // eslint-disable-next-line prefer-const
  let viewportRef: HTMLDivElement | undefined = undefined;

  const [viewportSize, setViewportSize] = createSignal<Point2D>({ x: 0, y: 0 });
  const [contentSize, setContentSize] = createSignal<Point2D>({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = createSignal<Point2D>({ x: 0, y: 0 });
  const [timer, setTimer] = createSignal<number | undefined>(undefined);

  onMount(() => {
    const obs = new ResizeObserver(handleResize);
    obs.observe(containerRef as HTMLDivElement);
    obs.observe(viewportRef as HTMLDivElement);
  });

  function handleResize(): void {
    const container = containerRef as HTMLDivElement;
    setViewportSize({ x: container.clientWidth, y: container.clientHeight });

    const content = viewportRef as HTMLDivElement;
    setContentSize({ x: content.clientWidth, y: content.clientHeight });
  }

  function handleWheel(e: WheelEvent): void {
    killEvent(e);

    const before = scrollPosition();
    const after = {
      x: clamp(0, Math.max(0, contentSize().x - viewportSize().x), before.x + e.deltaX),
      y: clamp(0, Math.max(0, contentSize().y - viewportSize().y), before.y + e.deltaY),
    };

    setScrollPosition(after);

    const existingTimer = timer();
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }
    setTimer(window.setTimeout(() => setTimer(undefined), 1000));
  }

  function scrollStyle(): JSX.CSSProperties {
    const pos = scrollPosition();
    return { transform: `translate(${-pos.x}px, ${-pos.y}px)` };
  }

  function scrollbarStyle(): JSX.CSSProperties {
    return { opacity: timer() ? 1 : 0 };
  }

  function thumbStyle(): JSX.CSSProperties {
    const pos = scrollPosition();
    const size = viewportSize();
    const content = contentSize();
    return {
      height: `${(size.y / content.y) * 100}%`,
      transform: `translate(${(pos.x / content.x) * size.x}px, ${(pos.y / content.y) * size.y}px)`,
    };
  }

  return (
    <div ref={containerRef} class={cx(styles.container, props.class)} onWheel={handleWheel}>
      <div ref={viewportRef} style={scrollStyle()}>
        {props.children}
      </div>
      <div class={styles.scrollbar} style={scrollbarStyle()}>
        <div class={styles.thumb} style={thumbStyle()} />
      </div>
    </div>
  );
};
