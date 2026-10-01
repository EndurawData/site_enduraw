import React, { useRef } from 'react';

// Pointer handlers (touch + mouse) that trigger prev/next on a horizontal swipe.
export const useSwipe = (onPrev: () => void, onNext: () => void, threshold = 40) => {
  const startX = useRef<number | null>(null);
  const startY = useRef(0);

  return {
    onPointerDown: (e: React.PointerEvent) => {
      startX.current = e.clientX;
      startY.current = e.clientY;
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (startX.current === null) return;
      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;
      startX.current = null;
      if (Math.abs(dx) < threshold || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) onNext();
      else onPrev();
    },
    onPointerCancel: () => {
      startX.current = null;
    },
    onDragStart: (e: React.DragEvent) => e.preventDefault(),
    style: { touchAction: 'pan-y' } as React.CSSProperties,
  };
};
