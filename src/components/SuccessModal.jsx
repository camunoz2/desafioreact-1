import Modal from "react-bootstrap/Modal";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SuccessModal({ isOpen, msg }) {
  const [show, setShow] = useState(isOpen);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Todo Ok!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{msg}</Modal.Body>
    </Modal>
  );
}
