import React from 'react';

function Modal({ isOpen, onClose, imageUrl }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={imageUrl} alt="Modal content" className="modal-image" />
      </div>
    </div>
  );
}

export default Modal; 