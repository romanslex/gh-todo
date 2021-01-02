import React, { PropsWithChildren } from 'react';
import Modal from 'antd/es/modal/Modal';
import { useMediaPredicate } from 'react-media-hook';
import { MEDIA_MOBILE_MAX_WIDTH } from 'common/const/Common.const';
import Drawer from 'antd/es/drawer';

interface IComponentProps {
  title: string;
  isOpen: boolean;
  close: () => void;
}

type AllProps = PropsWithChildren<IComponentProps>;

export const AppModal: React.FC<AllProps> = ({
  title,
  isOpen,
  close,
  children,
}: AllProps) => {
  const isMobile: boolean = useMediaPredicate(MEDIA_MOBILE_MAX_WIDTH);

  if (isMobile) {
    return (
      <Drawer
        title={title}
        placement="bottom"
        closable={false}
        maskClosable={false}
        visible={isOpen}
        onClose={close}
        key="bottom"
        className="modal-content modal-content_mobile"
        height="auto"
      >
        {children}
      </Drawer>
    );
  }

  return (
    <Modal
      title={title}
      className="modal-content modal-content_desktop"
      visible={isOpen}
      footer={null}
      closable={false}
      maskClosable={false}
      width={400}
      onCancel={close}
    >
      {children}
    </Modal>
  );
};
