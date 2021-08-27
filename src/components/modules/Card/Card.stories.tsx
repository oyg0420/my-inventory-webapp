import React from 'react';
import Card from '.';
import { Story } from '@storybook/react';

export default {
  component: Card,
  title: 'modules/Card',
};

const Template: Story = arg => (
  <Card>
    <Card.Title>this is Title</Card.Title>
    <Card.SubTitle>this is Sub-Title</Card.SubTitle>
    <Card.Content>this is Content</Card.Content>
  </Card>
);

export const Default = Template.bind({});

Default.args = {
  default: true,
  label: 'Card',
};
