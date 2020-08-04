import React, { useState } from 'react'

const Modal = (props) => {
  const [display, setDisplay] = useState(true);

  const open = () => {
    setDisplay(true);
  }

  const close = () => {
    setDisplay(false);
  }

  if (display) {
    return (
      <div className="modal-wrapper">
        <div onClick={close} className="modal-backdrop" />
        <div className="modal-box">
          {props.children}
        </div>
      </div>
    )
  }

  return null;
}
export default Modal;
