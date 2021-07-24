import { useCallback } from 'react';
import { FormState } from 'react-hook-form';

const useFormError = <TFieldValues>(formState: FormState<TFieldValues>) => {
  const getErrorMessage = useCallback(
    (value: keyof TFieldValues) => {
      return (formState.errors[value] as any)?.message;
    },
    [formState]
  );

  return {
    getErrorMessage,
  };
};

export default useFormError;
