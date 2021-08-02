import { RootState } from 'modules/reducers';

const selectSpinner = {
  show: (state: RootState) => state.spinner.show,
};

export default selectSpinner;
