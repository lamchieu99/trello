import HTMLReactParser from 'html-react-parser'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from 'utilities/constants'
import './ConfirmModel.scss'

function ConfirmModal(props) {
    const { title, content, show, onAction } = props


    return (
        <Modal className="modal" show={show} onHide={() => onAction(MODAL_ACTION_CLOSE)} backdrop='static' keyboard={false} animation={false}>
            <Modal.Header className="modal__header" >
                <Modal.Title className="h5">{HTMLReactParser(title)}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal__body">{HTMLReactParser(content)}</Modal.Body>
            <Modal.Footer className="modal__footer">
                <Button className=" button button--close" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
                    Close
                </Button>
                <Button className=" button button--save" onClick={() => onAction(MODAL_ACTION_CONFIRM)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal