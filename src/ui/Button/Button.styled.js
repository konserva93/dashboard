// import { Button as BPButton } from '@blueprintjs/core';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-family: Roboto, sans-serif;
  cursor: pointer;
  ${({ size }) => {
    switch (size) {
      case 'small': return `
        height: 32px;
        font-size: 13px;
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
  
  ${({ primary }) => (primary
    ? `
      box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 4px 4px rgba(54, 123, 245, 0.24);
      color: #367BF5;
      background-color: #fff;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.75px;
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
    text-align: ${({ hasLeftIcon, hasRightIcon }) => {
    if (hasLeftIcon) {
      return hasRightIcon ? 'center' : 'right';
    }
    return hasRightIcon ? 'left' : 'center';
  }};
  }
}
`;
