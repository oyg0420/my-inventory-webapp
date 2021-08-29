import FlexBox from 'components/atoms/FlexBox';
import { H2, H3 } from 'components/atoms/Heading';
import Span from 'components/atoms/Span';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ styles?: CardProps['styles'] }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: ${props => props.styles?.borderRadius || '10px'};
  ${props => props.styles?.width && `width: ${props.styles.width};`};
  height: ${props => props.styles?.height || '100%'};
  margin: ${props => props.styles?.margin || ''};
  box-shadow: ${props => props.styles?.boxShadow || '0 5px 15px 0 #dee8ef'};
`;

const StyledCardColumnContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCardTitle = styled(H2)`
  font-weight: 500;
  color: #333;
  margin: 2px 0;
  text-align: center;
`;

const StyledCardSubTitle = styled(H3)`
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
    <FlexBox className={className} styles={{ alignItems: 'center', justifyContent: 'center' }}>
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
      <StyledCardColumnContent>{children}</StyledCardColumnContent>
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
  className?: string;
  styles?: {
    width?: string;
    margin?: string;
    boxShadow?: string;
    borderRadius?: string;
    height?: string;
  };
};

const Card: React.FC<CardProps> & CardComponent = ({ className, styles, children }) => {
  return (
    <CardContainer className={className} styles={styles}>
      {children}
    </CardContainer>
  );
};

Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Content = CardContent;
Card.Column = styled(CardColumn)``;
Card.Row = styled(CarContentRow)``;

export default styled(Card)``;
