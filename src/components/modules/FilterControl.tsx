import Label from 'components/atoms/Label';
import React from 'react';
import AddInput from './AddInput';
import styled from 'styled-components';
import IconDash from 'images/icon-dash.svg';

const FilterItem = styled.li`
  max-width: 120px;
  padding: 0 5px;
  border-radius: 100px;
  background-color: rgb(234, 240, 245);
  vertical-align: middle;
  height: 22px;
  line-height: 22px;
  margin: 0 5px 5px 0;
  font-size: 12px;
  cursor: pointer;
`;

const FilterList = styled.ul`
  position: relative;
  flex: 1 1 0%;
  padding: 5px 2px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  box-sizing: border-box;
  cursor: text;
  display: flex;
  margin: 0;
  width: 100%;
  flex-wrap: wrap;
`;

const Icon = styled.svg`
  background-image: url(${IconDash});
  background-repeat: no-repeat;
  vertical-align: top;
  border-left: 1px solid;
  margin-left: 5px;
  height: 100%;
  width: 16px;
  background-position-y: 2px;
`;

const FilterControlContainer = styled.div`
  margin-right: 10px;
  width: 200px;
`;

type Props = {
  label: string;
  items: string[];
  onClick(value: string): void;
  onItemDeleteClick(value: string): void;
};

const FilterControl: React.FC<Props> = ({ label, items, onClick, onItemDeleteClick }) => {
  return (
    <FilterControlContainer>
      <Label>{label}</Label>
      <AddInput onAddButtonClick={onClick} />
      {items.length > 0 && (
        <FilterList>
          {items.map((item, index) => {
            return (
              <FilterItem key={`item-${index}`}>
                {item}
                <Icon onClick={() => onItemDeleteClick(item)} />
              </FilterItem>
            );
          })}
        </FilterList>
      )}
    </FilterControlContainer>
  );
};

export default FilterControl;
