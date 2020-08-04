import React, { useRef } from 'react'

import Modal from './Modal'

import './App.css'

export default function App() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          <span>modal content</span>
        </p>
        <button onClick={() => modalRef.current.closeModal()}>
          Close Modal
        </button>
      </Modal>
    </div>
  )
}
