import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
`;

const StyledCardTitle = styled.h2`
  font-family: inherit;
  font-weight: 500;
  color: #333;
  margin: 2px 0;
`;

const StyledCardSubTitle = styled.h3`
  color: #6c757d;
  margin: 2px 0;
`;

const StyledCardContent = styled.div`
  display: block;
`;

type CardComponent = {
  Title: React.FC;
  SubTitle: React.FC;
  Content: React.FC;
};

const CardContent: React.FC = ({ children }) => {
  return <StyledCardContent>{children}</StyledCardContent>;
};

const CardSubTitle: React.FC = ({ children }) => {
  return <StyledCardSubTitle>{children}</StyledCardSubTitle>;
};

const CardTitle: React.FC = ({ children }) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

const Card: React.FC & CardComponent = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Content = CardContent;

export default Card;
