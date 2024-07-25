import React, { forwardRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import { FaTimes } from 'react-icons/fa';

interface FadeProps {
  children: React.ReactElement;
  open?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    open = false,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  const backdropStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 0.5 : 0 },
  });

  return (
    <div ref={ref} {...other}>
      <animated.div
        style={{
          ...backdropStyle,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      />
      <animated.div style={style}>
        {React.cloneElement(children, { onClick })}
      </animated.div>
    </div>
  );
});

interface SpringModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SpringModal: React.FC<SpringModalProps> = ({ open, onClose, children }) => {
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade open={open}>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default SpringModal;
