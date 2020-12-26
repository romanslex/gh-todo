import React from 'react';
import Modal from 'antd/es/modal/Modal';
import { useMediaPredicate } from 'react-media-hook';
import { MEDIA_MOBILE_MAX_WIDTH } from 'common/const/Common.const';
import Drawer from 'antd/es/drawer';

interface IComponentProps {
  isOpen: boolean;
  close: () => void;
}

export const AppModal: React.FC<IComponentProps> = ({
  isOpen,
  close,
}: IComponentProps) => {
  const content = 'Hello from modal';
  const isMobile: boolean = useMediaPredicate(MEDIA_MOBILE_MAX_WIDTH);

  if (isMobile) {
    return (
      <Drawer
        placement="bottom"
        closable={false}
        visible={isOpen}
        onClose={close}
        key="bottom"
        className="modal-content modal-content_mobile"
        height="auto"
      >
        {content}
      </Drawer>
    );
  }

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
