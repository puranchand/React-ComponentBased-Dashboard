import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/modalComponent.scss';

const ModalComponent = (props) => {

  const { modalClassName, show, handleClose, header, content, hanndleSave, noFooter, noHeader } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose} className={modalClassName}>
        {noHeader ? null :
          <Modal.Header closeButton>
            <Modal.Title>{header ? header : 'Title'}</Modal.Title>
          </Modal.Header>}
        <Modal.Body>
          {content ? content : 'Empty Modal'}
        </Modal.Body>
        {noFooter ? null :
          <Modal.Footer>
            <Button onClick={handleClose}>
              Cancel
              </Button> 
            <Button onClick={hanndleSave}>
              Save
            </Button>
          </Modal.Footer>
        }
      </Modal>
    </>
  );
}

export default ModalComponent;