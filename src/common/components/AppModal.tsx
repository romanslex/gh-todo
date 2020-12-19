import React from 'react';
import Modal from 'antd/es/modal/Modal';

export const AppModal: React.FC = () => {
  const close = () => console.log('close');
  const content = 'Hello from modal';

  return (
    <Modal
      className="modal-content modal-content_desktop"
      visible
      footer={null}
      width={400}
      onCancel={close}
    >
      {content}
    </Modal>
  );
};
