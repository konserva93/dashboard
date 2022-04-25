import * as S from './Button.styled';
import { SVG } from '@src/ui/SVG/SVG';
import React from 'react';

interface IButtonProps {
  disabled?: boolean,
  primary?: boolean,
  minimal?: boolean,
  icon?: string,
  rightIcon?: string,
  size?: 'small' | 'regular' | 'large',
  text?: string,
}

export function Button({ icon, rightIcon, text, ...rest }: IButtonProps) {
  return (
    <S.Button {...rest} hasLeftIcon={!!icon} hasRightIcon={!!rightIcon}>
      {icon && <SVG name={icon} />}
      {text && <span>{text}</span>}
      {rightIcon && <SVG name={rightIcon} />}
    </S.Button>
  );
}
