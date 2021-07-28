import API from 'apis';

export type User = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  status: 'live' | 'removed';
  token: string;
};

export type PostSignInParams = {
  email: string;
  password: string;
};

export type PostSignInResponse = {
  user: User;
};

const postSignIn = async (params: PostSignInParams) => {
  const res = await API.post<PostSignInResponse>('/users/sign_in', params);

  return res.data;
};

export type PostSignUpParams = {
  email: string;
  name: string;
  password: string;
};

export type PostSignUpResponse = {
  user: Omit<User, 'token'>;
};

const postSignUp = async (params: PostSignUpParams) => {
  const res = await API.post<PostSignUpResponse>('/users/sign_up', params);

  return res.data;
};

export { postSignIn, postSignUp };
