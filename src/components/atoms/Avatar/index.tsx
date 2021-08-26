import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import IconPersonCircleBlack from 'images/icon-person-circle-black.svg';

const DEFAULT_PROFILE = IconPersonCircleBlack;

const AvatarContainer = styled(Icon)<{ type?: 'large' | 'small' }>`
  background-size: ${props => props.theme.avatar[props.type || 'default'].backgroundSize};
  width: ${props => props.theme.avatar[props.type || 'default'].width};
  height: ${props => props.theme.avatar[props.type || 'default'].height};
  border-radius: 100%;
`;

type Props = {
  url?: string;
  type?: 'large' | 'small';
};

const Avatar: React.FC<Props> = ({ url, type }) => {
  return <AvatarContainer type={type} url={url || DEFAULT_PROFILE} />;
};

export default Avatar;
