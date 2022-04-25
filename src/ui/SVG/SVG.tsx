import * as S from './SVG.styled';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IconPaths } from '@src/svg/generated';
import React from 'react';

interface ISVGProps {
  name: string,
  className?: string,
  customColor?: string,
  height?: number,
  width?: number,
}

export function SVG({ className, customColor, name, height, width }: ISVGProps) {
  const innerHtml = IconPaths[name];
  return innerHtml
    ? (
      <S.SVG
        className={className}
        customcolor={customColor}
        height={height}
        innerHtml={innerHtml}
        width={width}
      />
    )
    : null;
}
