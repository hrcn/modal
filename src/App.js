import React from 'react'

import Modal from './Modal'

import './App.css'

export default function App() {
  const openModal = () => {
    console.log("open modal");
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal>
        <h1>Modal Header</h1>
        <p>
          <span>modal content</span>
        </p>
      </Modal>
    </div>
  )
}
