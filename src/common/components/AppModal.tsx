import React from 'react';
import Modal from 'antd/es/modal/Modal';

interface IComponentProps {
  isOpen: boolean;
  close: () => void;
}

export const AppModal: React.FC<IComponentProps> = ({
  isOpen,
  close,
}: IComponentProps) => {
  const content = 'Hello from modal';

  return (
    <Modal
      className="modal-content modal-content_desktop"
      visible={isOpen}
      footer={null}
      width={400}
      onCancel={close}
    >
      {content}
    </Modal>
  );
};
