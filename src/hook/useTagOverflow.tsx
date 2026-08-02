import { useLayoutEffect, useState } from "react";

export function useTagOverflow(containerRef: React.RefObject<HTMLDivElement>, tagCount: number) {
  const [visibleCount, setVisibleCount] = useState(tagCount);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      const children = Array.from(container.children) as HTMLElement[];
      const containerWidth = container.clientWidth;
      let usedWidth = 0;
      let visible = 0;

      for (const child of children) {
        usedWidth += child.offsetWidth;
        if (usedWidth > containerWidth) break;
        visible++;
      }

      setVisibleCount(visible);
    });

    observer.observe(container);
    return () => observer.disconnect();
    
  }, [tagCount]);

  return visibleCount;
}