import React from 'react';
import Table from 'components/modules/Table';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useState } from 'react';
import Portal from 'components/modules/Portal';
import ProductModal from 'components/pages/ProductModal';
import Button from 'components/atoms/Button';
import { v4 } from 'uuid';
import ButtonGroup from 'components/atoms/ButtonGroup';
import BarcodeCaptureModal from './BarcodeCaptureModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteKeyword, fetchKeywords } from 'modules/keyword';
import Input from 'components/atoms/Input';
import { useEffect } from 'react';
import { useRef } from 'react';
import selectKeyword from 'modules/keyword/selector';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
`;

const ProductFilterField = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const Products: React.FC = () => {
  const [showProductModal, toggleShowProductModal] = useState(false);
  const [showBarcodeCaptureModal, toggleShowBarcodeCaptureModal] = useState(false);
  const [keyword, setKeyword] = useState('');
  const timeRef = useRef(0);
  const keywordList = useSelector(selectKeyword.list);

  const dispatch = useDispatch();

  const handleShowProductModalClick = useCallback(() => {
    toggleShowProductModal(true);
  }, []);

  const handleHideProductModalClick = useCallback(() => {
    toggleShowProductModal(false);
  }, []);

  const handleShowBarcodeCaptureModalClick = useCallback(() => {
    toggleShowBarcodeCaptureModal(true);
  }, []);

  const handleHideBarcodeCaptureModalClick = useCallback(() => {
    toggleShowBarcodeCaptureModal(false);
  }, []);

  const handleSearchKeywordChange = useCallback((nextKeyword: string) => {
    setKeyword(nextKeyword);
  }, []);

  const handleDeleteClick = useCallback(
    (keywordItemIdx: number) => {
      dispatch(deleteKeyword({ selectedIdx: keywordItemIdx }));
    },
    [dispatch]
  );

  useEffect(() => {
    clearTimeout(timeRef.current);
    timeRef.current = window.setTimeout(() => dispatch(fetchKeywords({ keyword })), 1000);
  }, [keyword, dispatch]);

  return (
    <ProductContainer>
      <ProductFilterField>
        <ButtonGroup>
          {/* <Button buttonType="primary" type="button" buttonSize="small" onClick={handleShowProductModalClick}>
            제품 등록
          </Button>
          <Button buttonType="primary" type="button" buttonSize="small" onClick={handleShowBarcodeCaptureModalClick}>
            바코드 인식
          </Button> */}
          <Input value={keyword} onValueChange={handleSearchKeywordChange} />
        </ButtonGroup>
      </ProductFilterField>
      <Table
        columns={[
          { title: '검색어', key: v4(), width: '10%' },
          { title: 'PC 검색수', key: v4(), width: '5%' },
          { title: 'Mobile 검색수', key: v4(), width: '5%' },
          { title: '총조회수', key: v4(), width: '5%' },
          { title: '제품수', key: v4(), width: '5%' },
          { title: '비율', key: v4(), width: '5%' },
          { title: '경쟁강도', key: v4(), width: '5%' },
          { title: '연관검색어', key: v4(), width: '40%' },
          { title: '', key: v4(), width: '5%' },
        ]}
        data={keywordList.map((keywordItem, keywordItemIdx) => {
          return {
            key: v4(),
            colums: [
              { key: v4(), element: keywordItem.keyword },
              { key: v4(), element: keywordItem.searchVolumeWithPC },
              { key: v4(), element: keywordItem.searchVolumeWithMobile },
              { key: v4(), element: keywordItem.totalVolume },
              { key: v4(), element: keywordItem.totalCount },
              { key: v4(), element: keywordItem.competition },
              { key: v4(), element: keywordItem.competitiveStrength },
              { key: v4(), element: keywordItem.relativeKeywords.join(',') },
              {
                key: v4(),
                element: (
                  <Button onClick={() => handleDeleteClick(keywordItemIdx)} buttonType="danger">
                    제거
                  </Button>
                ),
              },
            ],
          };
        })}
      />
      <Portal>{showProductModal && <ProductModal onHideClick={handleHideProductModalClick} />}</Portal>
      <Portal>
        {showBarcodeCaptureModal && <BarcodeCaptureModal onHideClick={handleHideBarcodeCaptureModalClick} />}
      </Portal>
    </ProductContainer>
  );
};

export default Products;
