import React from 'react';
import InputAddon from 'components/atoms/InputAddon';
import Input from 'components/atoms/Input';
import Icon from 'components/atoms/Icon';
import IconPlusWhite from 'images/icon-plus-white.svg';
import { useState } from 'react';
import { useCallback } from 'react';

type Props = {
  onKeywordValueChange?(keyword: string): void;
  onAddButtonClick?(keyword: string): void;
};

const AddInput: React.FC<Props> = ({ onKeywordValueChange, onAddButtonClick }) => {
  const [keyword, setKeyword] = useState('');

  const handleValueChange = useCallback(
    (nextKeyword: string) => {
      setKeyword(nextKeyword);
      onKeywordValueChange?.(nextKeyword);
    },
    [onKeywordValueChange]
  );

  const handleButtonClick = useCallback(() => {
    onAddButtonClick?.(keyword);
    setKeyword('');
  }, [keyword, onAddButtonClick]);

  return (
    <InputAddon styles={{ width: '100%' }}>
      <Input value={keyword} onValueChange={handleValueChange} />
      <span onClick={handleButtonClick}>
        <Icon url={IconPlusWhite} width="16px" height="16px" />
      </span>
    </InputAddon>
  );
};

export default AddInput;
