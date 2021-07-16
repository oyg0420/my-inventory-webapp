import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.thead``;

const StyledTableBody = styled.tbody``;

const StyledTableHeaderColumn = styled.th<{ columnWidth: string }>`
  height: 30px;
  width: ${props => props.columnWidth};
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  color: #7d7d7d;
  background-color: #fafafa;
  font-size: 12px;
  vertical-align: middle;
  text-align: initial;
`;

const StyledTableColumn = styled.td`
  font-size: 12px;
  height: 60px;
  vertical-align: middle;
`;

const StyledTableRow = styled.tr`
  background-color: #fff;

  &:hover {
    background-color: rgba(2, 40, 85, 0.04);
  }

  ${StyledTableHeaderColumn} {
    padding-left: 10px;
  }
  ${StyledTableColumn} {
    padding-left: 10px;
  }
  ${StyledTableHeaderColumn}:last-child {
    padding-right: 10px;
  }
  ${StyledTableColumn}:last-child {
    padding-right: 10px;
  }
`;

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  transition: opacity 300ms ease-in-out;
  ${StyledTableHeaderColumn} {
    position: sticky;
    top: 0;
  }
`;

export const TableRow: React.FC = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export const TableColumn: React.FC = ({ children }) => {
  return <StyledTableColumn>{children}</StyledTableColumn>;
};

export const TableBody: React.FC = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

type TableHeaderColumnProps = { columnWidth: string };

export const TableHeaderColumn: React.FC<TableHeaderColumnProps> = ({ columnWidth, children }) => {
  return <StyledTableHeaderColumn columnWidth={columnWidth}>{children}</StyledTableHeaderColumn>;
};

export const TableHeader: React.FC = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export const Table: React.FC = ({ children }) => {
  return (
    <TableContainer>
      <StyledTable>{children}</StyledTable>
    </TableContainer>
  );
};
