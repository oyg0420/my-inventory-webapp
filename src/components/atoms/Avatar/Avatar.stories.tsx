import React from 'react';
import Avatar from '.';
import { Story } from '@storybook/react';

export default {
  component: Avatar,
  title: 'modules/Avatar',
};

const Template: Story = arg => <Avatar type="large" />;

export const Default = Template.bind({});

Default.args = {
  default: true,
  label: 'Avatar',
};
