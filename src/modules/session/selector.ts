import { RootState } from 'modules/reducers';

const selectUser = {
  isLoggedIn: (state: RootState) => !!state.session.user.token,
};

export default selectUser;
