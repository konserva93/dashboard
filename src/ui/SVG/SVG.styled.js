import React from 'react';
import parse from 'html-react-parser';
import styled from 'styled-components';

const FromHtml = ({ innerHtml, ...props }) => (
  React.cloneElement(parse(innerHtml), props)
);

export default FromHtml;

export const SVG = styled(FromHtml)`
  ${({ customcolor }) => (customcolor
    ? `&, * {
        &[fill]:not([fill="none"]) {
          fill: ${customcolor};
        }

        &[stroke]:not([stroke="none"]) {
          stroke: ${customcolor};
        }
      }`
    : '')}
`;
