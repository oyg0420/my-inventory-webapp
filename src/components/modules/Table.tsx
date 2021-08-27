import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.thead``;

const StyledTableBody = styled.tbody<{ styles?: TableBodyProps['styles'] }>`
  ${props => props.styles?.border && `border: ${props.styles.border};`};
  ${props => props.styles?.borderRadius && `bordr-radius: ${props.styles.borderRadius};`};
  ${props => props.styles?.backgroundColor && `background-color: ${props.styles.backgroundColor};`}
`;

const StyledTableHeaderColumn = styled.th<{ columnWidth: string }>`
  height: 30px;
  width: ${props => props.columnWidth};
  box-sizing: border-box;
  color: #333;
  background-color: #fff;
  font-size: 14px;
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
  width: 100%;
`;

const TableContainer = styled.div<{ styles?: TableProps['styles'] }>`
  height: 100%;
  width: ${props => props.styles?.width || '100%'};
  overflow: auto;
  transition: opacity 300ms ease-in-out;
  ${StyledTableHeaderColumn} {
    position: sticky;
    top: 0;
  }
`;

type TableRowProps = {
  onClick?(): void;
};

const TableRow: React.FC<TableRowProps> = ({ onClick, children }) => {
  return <StyledTableRow onClick={onClick}>{children}</StyledTableRow>;
};

type TableColumnProps = {
  className?: string;
};

const TableColumn: React.FC<TableColumnProps> = ({ className, children }) => {
  return <StyledTableColumn className={className}>{children}</StyledTableColumn>;
};

type TableBodyProps = {
  styles?: {
    border?: string;
    backgroundColor?: string;
    borderRadius?: string;
  };
};

const TableBody: React.FC<TableBodyProps> = ({ styles, children }) => {
  return <StyledTableBody styles={styles}>{children}</StyledTableBody>;
};

type TableHeaderColumnProps = { columnWidth: string };

const TableHeaderColumn: React.FC<TableHeaderColumnProps> = ({ columnWidth, children }) => {
  return <StyledTableHeaderColumn columnWidth={columnWidth}>{children}</StyledTableHeaderColumn>;
};

const TableHeader: React.FC = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

type TableComponent = {
  Header: React.FC;
  HeaderColumn: React.FC<TableHeaderColumnProps>;
  Row: React.FC<TableRowProps>;
  Body: React.FC<TableBodyProps>;
  Column: React.FC<TableColumnProps>;
};

type TableProps = {
  styles?: {
    width?: string;
  };
};

const Table: React.FC<TableProps> & TableComponent = ({ styles, children }) => {
  return (
    <TableContainer styles={styles}>
      <StyledTable>{children}</StyledTable>
    </TableContainer>
  );
};

Table.Header = TableHeader;
Table.HeaderColumn = TableHeaderColumn;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Column = styled(TableColumn)``;

export default Table;
