import React from 'react';
import classNames from 'classnames';
import WaterfallWrapper, {
  WaterfallChildItem,
  WaterfallWrapperProps,
} from './WaterfallWrapper';
import findMinIndex from '@app/utils/findMinIndex';

interface WaterfallProps
  extends React.HTMLAttributes<HTMLDivElement>,
    WaterfallWrapperProps {
  columnCount?: number;
  lineSpacing?: number;
  itemSpacing?: number;
}

const Waterfall: React.FC<WaterfallProps> = (props: WaterfallProps) => {
  const {
    width,
    lineSpacing,
    itemSpacing,
    className,
    columnCount,
    children,
    ...restProps
  } = props;
  if (
    columnCount === undefined ||
    lineSpacing === undefined ||
    itemSpacing === undefined
  ) {
    return null;
  }

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (wrapperRef.current === null) {
      return;
    }

    const maxColumnH: number[] = new Array(columnCount).fill(0);
    const children = Array.from(wrapperRef.current.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childWidth =
        (width - itemSpacing * (columnCount - 1)) / columnCount;
      child.classList.add(WaterfallChildItem(childWidth, lineSpacing));

      const minHIndex = findMinIndex(maxColumnH);
      child.style.top = `${maxColumnH[minHIndex]}px`;
      child.style.left = `${minHIndex * (itemSpacing + childWidth)}px`;
      maxColumnH[minHIndex] += child.offsetHeight + lineSpacing;
    }
    wrapperRef.current.style.height = `${Math.max(...maxColumnH)}px`;
  }, [columnCount, width, wrapperRef, children]);

  return (
    <WaterfallWrapper
      width={width}
      {...restProps}
      className={classNames(className)}
      ref={wrapperRef}
    >
      {children}
    </WaterfallWrapper>
  );
};

Waterfall.defaultProps = {
  columnCount: 2,
  lineSpacing: 5,
  itemSpacing: 5,
};

export default React.memo(Waterfall);
