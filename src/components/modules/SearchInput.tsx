import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import InputAddon from 'components/atoms/InputAddon';
import React, { KeyboardEvent, useEffect } from 'react';
import IconSearchWhite from 'images/icon-search-white.svg';
import { useState } from 'react';
import { useCallback } from 'react';

type Props = {
  originKeyword?: string;
  onKeywordChange?(keyword: string): void;
  onEnterKeyPress?(keyword: string): void;
};

const SearchInput: React.FC<Props> = ({ originKeyword, onKeywordChange, onEnterKeyPress }) => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = useCallback(
    (nextKeyword: string) => {
      setKeyword(nextKeyword);
      onKeywordChange?.(nextKeyword);
    },
    [onKeywordChange]
  );

  const handleEnterKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnterKeyPress?.(keyword);
      }
    },
    [onEnterKeyPress, keyword]
  );

  useEffect(() => {
    if (originKeyword) {
      setKeyword(originKeyword);
    }
  }, [originKeyword]);

  return (
    <InputAddon>
      <Input value={keyword} onValueChange={handleKeywordChange} onKeyPress={handleEnterKeyPress} />
      <span>
        <Icon url={IconSearchWhite} width="16px" height="16px" />
      </span>
    </InputAddon>
  );
};

export default SearchInput;
