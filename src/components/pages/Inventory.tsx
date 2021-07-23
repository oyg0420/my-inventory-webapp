import React from 'react';
import Table from 'components/modules/Table';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import Portal from 'components/modules/Portal';
import InventoryModal from 'components/pages/InventoryModal';
import Button from 'components/atoms/Button';
import { v4 } from 'uuid';

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

  return (
    <InventoryContainer>
      <InvertoryFilterField>
        <Button buttonType="primary" type="button" onClick={handleButtonClick}>
          제품 등록
        </Button>
      </InvertoryFilterField>
      <Table
        columns={[
          { title: '이미지', key: v4(), width: '20%' },
          { title: '제품명', key: v4(), width: '20%' },
          { title: '바코드', key: v4(), width: '20%' },
          { title: '재고', key: v4(), width: '20%' },
          { title: '등록일', key: v4(), width: '20%' },
        ]}
        data={new Array(5).fill(1).map(() => {
          return {
            key: v4(),
            colums: [
              { key: v4(), element: 'test1' },
              { key: v4(), element: 'test1' },
              { key: v4(), element: 'test1' },
              { key: v4(), element: 'test1' },
              { key: v4(), element: 'test1' },
            ],
          };
        })}
      />
      <Portal>{show && <InventoryModal onHideClick={handleHideClick} />}</Portal>
    </InventoryContainer>
  );
};

export default Inventory;
