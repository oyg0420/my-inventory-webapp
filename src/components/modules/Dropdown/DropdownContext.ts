import { createContext } from 'react';

type Props = {
  show: boolean;
  onToggleShow(show: boolean): void;
  onClickItem(value: any): void;
};

const DropdownContext = createContext<Props>({
  show: false,
  onToggleShow: () => {},
  onClickItem: () => {},
});

export default DropdownContext;
