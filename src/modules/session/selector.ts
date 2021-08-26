import { RootState } from 'modules/reducers';

const selectUser = {
  isLoggedIn: (state: RootState) => !!state.session.user.token,
  user: (state: RootState) => state.session.user,
};

export default selectUser;
