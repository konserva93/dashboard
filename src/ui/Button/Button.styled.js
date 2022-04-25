// import { Button as BPButton } from '@blueprintjs/core';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  grid-gap: 12px;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-family: Roboto, sans-serif; // TODO: typography
  cursor: pointer;
  ${({ size }) => {
    switch (size) {
      case 'small': return `
        height: 32px;
        font-size: 13px;
      `;
      case 'large': return `
        height: 56px;
        border-radius: 99px;
        padding: 12px 16px;
        line-height: 28px;
      `;
      case 'regular':
      default: return `
        font-size: 16px;
        padding: 8px 9px;    
        min-width: 96px;
        height: 40px;
      `;
    }
  }}
  
  ${({ primary, size }) => (primary
    ? `
      box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 4px 4px rgba(54, 123, 245, 0.24);
      color: #367BF5;
      background-color: #fff;
      text-transform: uppercase;
      font-size: ${size === 'large' ? '20px' : '14px'};
      font-weight: 600;
      letter-spacing: ${size === 'large' ? '0.15px' : '0.75px'};
    `
    : null
  )}
  
  ${({ minimal }) => (minimal
    ? `
      background-color: transparent;
    `
    : null)}
  
  ${({ disabled }) => (disabled
    ? `
      color: #5E6366;
      background-color: #F7F9FA;
      box-shadow: none;
    `
    : null)}

  > svg {
    height: 1.75em;
    width: 1.75em;
  }
  
  > span {
    flex: 1;
    text-align: ${({ textAlign, hasLeftIcon, hasRightIcon }) => {
    /* eslint-disable */
      if (textAlign) {
        return textAlign;
      }
      if (hasLeftIcon) {
        return hasRightIcon ? 'center' : 'right';
      }
      return hasRightIcon ? 'left' : 'center';
    }};
    /* eslint-enable */
    
    > div:nth-child(2) {
      color: #5E6366;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      margin-top: 4px;
    }
  }
}
`;
