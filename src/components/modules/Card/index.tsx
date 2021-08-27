import FlexBox from 'components/atoms/FlexBox';
import Span from 'components/atoms/Span';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ styles?: CardProps['styles'] }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 10px;
  border-radius: ${props => props.styles?.borderRadius || '5px'};
  width: ${props => props.styles?.width || '100%'};
  ${props => props.styles?.margin && `margin: ${props.styles.margin};`};
  ${props => props.styles?.boxShadow && `box-shadow: ${props.styles.boxShadow};`};
`;

const StyledCardTitle = styled.h2`
  font-weight: 500;
  color: #333;
  margin: 2px 0;
  text-align: center;
`;

const StyledCardSubTitle = styled.h3`
  color: #6c757d;
  margin: 2px 0;
`;

const StyledCardContent = styled.div`
  display: flex;
  height: 100%;
`;

type CardComponent = {
  Title: React.FC;
  SubTitle: React.FC;
  Content: React.FC<CardContentRowProps>;
  Column: React.FC<CardColumnProps>;
  Row: React.FC;
};

type CardContentRowProps = {
  className?: string;
};

const CarContentRow: React.FC<CardContentRowProps> = ({ className, children }) => {
  return (
    <FlexBox
      className={className}
      styles={{ margin: '10px 0', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 30px 0 #dee8ef' }}
    >
      {children}
    </FlexBox>
  );
};

type CardColumnProps = {
  className?: string;
  label?: string;
};

const CardColumn: React.FC<CardColumnProps> = ({ className, label, children }) => {
  return (
    <FlexBox
      className={className}
      styles={{ margin: '0 10px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
      {label && <Span styles={{ fontSize: '14px' }}>{label}</Span>}
      <Span styles={{ fontWeight: 'bold' }}>{children}</Span>
    </FlexBox>
  );
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

type CardProps = {
  styles?: {
    width?: string;
    margin?: string;
    boxShadow?: string;
    borderRadius?: string;
  };
};

const Card: React.FC<CardProps> & CardComponent = ({ styles, children }) => {
  return <CardContainer styles={styles}>{children}</CardContainer>;
};

Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Content = CardContent;
Card.Column = styled(CardColumn)``;
Card.Row = styled(CarContentRow)``;

export default Card;
