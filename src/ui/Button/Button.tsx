import * as S from './Button.styled';
import { SVG } from '@src/ui/SVG/SVG';
import React from 'react';

interface IButtonProps {
  disabled?: boolean,
  primary?: boolean,
  minimal?: boolean,
  icon?: string,
  rightIcon?: string,
  iconColor?: string,
  size?: 'small' | 'regular' | 'large',
  text?: string,
  secondaryText?: string,
  textAlign?: string,
}

export function Button({ icon, rightIcon, iconColor, text, secondaryText, ...rest }: IButtonProps) {
  return (
    <S.Button {...rest} hasLeftIcon={!!icon} hasRightIcon={!!rightIcon}>
      {icon && <SVG name={icon} color={iconColor} />}
      {text && (
        <span>
          <div>{text}</div>
          {secondaryText && (
            <div>{secondaryText}</div>
          )}
        </span>
      )}
      {rightIcon && <SVG name={rightIcon} color={iconColor} />}
    </S.Button>
  );
}
