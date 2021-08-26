import React from 'react';
import Modal from '.';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  component: Modal,
  title: 'modules/Modal',
};

const Template: Story = arg => (
  <Modal>
    <Modal.Header onHideClick={action('hide-click')}>Title</Modal.Header>
    <Modal.Body>Description</Modal.Body>
    <Modal.Footer>Footer</Modal.Footer>
  </Modal>
);

export const Default = Template.bind({});

Default.args = {
  default: true,
  label: 'Modal',
};
