import { Modal, ModalBody, ModalHeader, ModalFooter } from 'components/commons/Modal';
import React from 'react';
import Button, { ButtonGroup } from 'components/commons/Button';

type Props = {
  onHideClick(): void;
};

const InventoryModal: React.FC<Props> = ({ onHideClick }) => {
  return (
    <Modal>
      <ModalHeader onHideClick={onHideClick}>제품등록</ModalHeader>
      <ModalBody>테스트입니다.</ModalBody>
      <ModalFooter>
        <ButtonGroup>
          <Button type="button" onClick={onHideClick}>
            닫기
          </Button>
          <Button type="button" buttonType="primary">
            저장
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  );
};

export default InventoryModal;
