import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn, TableColumn } from 'components/commons/Table';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import Portal from 'components/commons/Portal';
import InventoryModal from 'components/InventoryModal';
import Button from 'components/commons/Button';

const InventoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
`;

const InvertoryFilterField = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Inventory: React.FC = () => {
  const [show, toggleShow] = useState(false);

  const handleButtonClick = useCallback(() => {
    toggleShow(true);
  }, []);

  const handleHideClick = useCallback(() => {
    toggleShow(false);
  }, []);

  const test = new Array(100);
  return (
    <InventoryContainer>
      <InvertoryFilterField>
        <Button buttonType="primary" type="button" onClick={handleButtonClick}>
          제품 등록
        </Button>
      </InvertoryFilterField>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn columnWidth="20%">이미지</TableHeaderColumn>
            <TableHeaderColumn columnWidth="20%">제품명</TableHeaderColumn>
            <TableHeaderColumn columnWidth="20%">바코드</TableHeaderColumn>
            <TableHeaderColumn columnWidth="20%">재고</TableHeaderColumn>
            <TableHeaderColumn columnWidth="20%">등록일</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {test.fill(1).map(() => {
            return (
              <TableRow>
                <TableColumn>test1</TableColumn>
                <TableColumn>test1</TableColumn>
                <TableColumn>test1</TableColumn>
                <TableColumn>test1</TableColumn>
                <TableColumn>test1</TableColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Portal>{show && <InventoryModal onHideClick={handleHideClick} />}</Portal>
    </InventoryContainer>
  );
};

export default Inventory;
