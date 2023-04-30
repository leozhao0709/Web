import { css } from '@emotion/css';
import styled from '@emotion/styled';

export interface WaterfallWrapperProps {
  width: number;
}

const WaterfallWrapper = styled.div<WaterfallWrapperProps>`
  display: block;
  width: ${(prop) => prop.width}px;
  background-color: #ccc;
  position: relative;
`;

export const WaterfallChildItem = (width: number, lineSpacing: number) => css`
  display: inline-block;
  position: absolute;
  width: ${width}px;
  margin-bottom: ${lineSpacing}px;
`;

export default WaterfallWrapper;
