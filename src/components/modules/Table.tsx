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

type TableRowProps = {
  onClick?(): void;
};

const TableRow: React.FC<TableRowProps> = ({ onClick, children }) => {
  return <StyledTableRow onClick={onClick}>{children}</StyledTableRow>;
};

const TableColumn: React.FC = ({ children }) => {
  return <StyledTableColumn>{children}</StyledTableColumn>;
};

const TableBody: React.FC = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

type TableHeaderColumnProps = { columnWidth: string };

const TableHeaderColumn: React.FC<TableHeaderColumnProps> = ({ columnWidth, children }) => {
  return <StyledTableHeaderColumn columnWidth={columnWidth}>{children}</StyledTableHeaderColumn>;
};

const TableHeader: React.FC = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

type TableColumnType = {
  title: string;
  key: string;
  width: string;
};

type TableDataColumnType = {
  element: React.ReactNode;
  key: string;
};

type TableDataType = {
  key: string;
  colums: TableDataColumnType[];
};

type Props = {
  columns: TableColumnType[];
  data: TableDataType[];
  onRowClick?(): void;
};

const Table: React.FC<Props> = ({ columns, data, onRowClick }) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <TableRow>
            {columns.map(column => (
              <TableHeaderColumn key={column.key} columnWidth={column.width}>
                {column.title}
              </TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.key} onClick={onRowClick}>
              {row.colums.map(column => (
                <TableColumn key={column.key}>{column.element}</TableColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;