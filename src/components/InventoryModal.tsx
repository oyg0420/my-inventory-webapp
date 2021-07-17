import { Modal, ModalBody, ModalHeader, ModalFooter } from 'components/commons/Modal';
import React from 'react';
import Button, { ButtonGroup } from 'components/commons/Button';
import DatePicker from 'components/commons/DatePicker';
import { useCallback } from 'react';
import Input from './commons/Input';
import { Form, ControllerGroup } from 'components/commons/Form';
import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useRef } from 'react';
import moment from 'moment';

type FormValues = {
  productName: string;
  barcode: string;
  stock: number;
  registerDate: string;
};

type Props = {
  onHideClick(): void;
};

const InventoryModal: React.FC<Props> = ({ onHideClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { formState, control, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      productName: '',
      barcode: '',
      stock: 0,
      registerDate: moment().format('YYYY-MM-DD'),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<FormValues> = erros => {
    console.log(erros);
  };

  const handleSubmitClick = useCallback(e => {
    buttonRef.current?.click();
  }, []);

  return (
    <Modal>
      <ModalHeader onHideClick={onHideClick}>제품등록</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Controller
            control={control}
            name="productName"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <ControllerGroup label="제품명">
                <Input placeholder="제품명" value={value} onValueChange={onChange} />
              </ControllerGroup>
            )}
          />
          <Controller
            control={control}
            name="barcode"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <ControllerGroup label="바코드">
                <Input placeholder="바코드" value={value} onValueChange={onChange} />
              </ControllerGroup>
            )}
          />
          <Controller
            control={control}
            name="stock"
            rules={{ required: true, validate: value => +value > 0 }}
            render={({ field: { onChange, value } }) => (
              <ControllerGroup label="재고">
                <Input placeholder="재고" type="number" min="0" value={value} onValueChange={onChange} />
              </ControllerGroup>
            )}
          />
          <Controller
            control={control}
            name="registerDate"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <ControllerGroup label="등록일">
                <DatePicker value={value} onDateChange={onChange} />
              </ControllerGroup>
            )}
          />
          <Button ref={buttonRef} type="submit" style={{ display: 'none' }} />
        </Form>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup>
          <Button type="button" onClick={onHideClick}>
            닫기
          </Button>
          <Button
            type="button"
            buttonType="primary"
            onClick={handleSubmitClick}
            disabled={!formState.isDirty || !formState.isValid}
          >
            저장
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  );
};

export default InventoryModal;
