import styled from 'styled-components';

export const Table = styled.table`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: 0;
  // border-spacing: 32px 0;
  // height: 100%;
  // overflow: visible;
  // display: none;
  * {
    padding: 0;
    margin: 0;
  }
`;

export const Header = styled.thead`
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
  color: #919699;
  height: 48px;
  
  tr {
    border-bottom: 1px solid #E3E5E5;
  }
`;

export const HeaderCell = styled.th`
  text-align: ${({ align }) => align};
  width: ${({ $size }) => ($size ? `${$size}px` : 'auto')};
  position: sticky;
  top: 0;
  background-color: #E2F0F0;
  overflow: hidden;
  white-space: nowrap;
  
  &:not(:first-child) {
    padding-left: 32px;
  }
`;

export const Row = styled.tr`
  height: 64px;
  
  &:not(:last-child) {
    border-bottom: 1px solid #E3E5E5;
  }
`;

export const Cell = styled.td`
  color: ${({ primary }) => (primary ? '#000' : '#5E6366')};
  text-align: ${({ align }) => align};
  width: ${({ $size }) => ($size ? `${$size}px` : '100%')};
  
  &:not(:first-child) {
    padding-left: 32px;
  }
`;

export const SearchBar = styled.tr`  
  td {
    position: sticky;
    bottom: 0;
    background-color: #E2F0F0;
    
    &:not(:first-child) {
      padding-left: 32px;
    }
  }
`;

export const SearchCell = styled.td`
  width: ${({ $size }) => ($size ? `${$size}px` : 'auto')};
  
  input {
    height: 32px;
    width: 100%;
    background-color: inherit;
    border: 1px solid #C6CACC;
    border-radius: 10px;
    padding-left: 12px;
  }
`;
