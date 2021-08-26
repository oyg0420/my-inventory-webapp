import React from 'react';
import { Story } from '@storybook/react';
import Dropdown from '.';
import Avatar from 'components/atoms/Avatar';
import { action } from '@storybook/addon-actions';

export default {
  component: Dropdown,
  title: 'modules/Dropdown',
};

const Template: Story = arg => (
  <Dropdown onSelect={action('item-click')}>
    <Dropdown.Button>
      <Avatar />
    </Dropdown.Button>
    <Dropdown.Menu>
      <Dropdown.MenuItem value="test-1">test-1</Dropdown.MenuItem>
      <Dropdown.MenuItem value="test-2">test-2</Dropdown.MenuItem>
      <Dropdown.MenuItem value="test-3">test-3</Dropdown.MenuItem>
      <Dropdown.MenuItem value="test-4">test-4</Dropdown.MenuItem>
    </Dropdown.Menu>
  </Dropdown>
);

export const Default = Template.bind({});

Default.args = {
  default: true,
  label: 'Dropdown',
};
