import Modal from 'components/modules/Modal';
import React from 'react';
import Button from 'components/atoms/Button';
import { useCallback } from 'react';
import Input from '../atoms/Input';
import FormController from 'components/modules/FormController';
import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useRef } from 'react';
import moment from 'moment';
import Form from 'components/atoms/Form';

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
    <Modal
      title="제품등록"
      buttonGroup={
        <>
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
        </>
      }
      onHideClick={onHideClick}
    >
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Controller
          control={control}
          name="productName"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <FormController label="제품명">
              <Input
                placeholder="제품명"
                value={value}
                onValueChange={onChange}
                styles={{ width: '100%', margin: '0 0 10px 0' }}
              />
            </FormController>
          )}
        />
        <Controller
          control={control}
          name="barcode"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <FormController label="바코드">
              <Input
                placeholder="바코드"
                value={value}
                onValueChange={onChange}
                styles={{ width: '100%', margin: '0 0 10px 0' }}
              />
            </FormController>
          )}
        />
        <Controller
          control={control}
          name="stock"
          rules={{ required: true, validate: value => +value > 0 }}
          render={({ field: { onChange, value } }) => (
            <FormController label="재고">
              <Input
                placeholder="재고"
                type="number"
                min="0"
                value={value}
                onValueChange={onChange}
                styles={{ width: '100%', margin: '0 0 10px 0' }}
              />
            </FormController>
          )}
        />
        <Controller
          control={control}
          name="registerDate"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <FormController label="등록일">
              <Input
                type="date"
                value={value}
                onValueChange={onChange}
                styles={{ width: '100%', margin: '0 0 10px 0' }}
              />
            </FormController>
          )}
        />
        <Button ref={buttonRef} type="submit" style={{ display: 'none' }} />
      </Form>
    </Modal>
  );
};

export default InventoryModal;
