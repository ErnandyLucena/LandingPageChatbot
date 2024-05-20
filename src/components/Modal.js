import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Importe seu arquivo de estilo CSS para o Modal

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
