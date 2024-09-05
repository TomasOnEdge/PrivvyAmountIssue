import {Button, Modal} from "react-bootstrap";
import React from "react";

export const SimpleModal = ({title, visible, content, footer, onClose, notClosable}) => {
    return (
        <Modal className={"modal full-height"} show={visible} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                {!notClosable && <Button variant="primary" onClick={onClose}> <i className={"fa fa-xmark"}/></Button>}
            </Modal.Header>
            <Modal.Body style={{padding: 0, overflowY: "auto"}}>
                {content}

            </Modal.Body>
            <Modal.Footer className={"fr jcfe gap-2"}>
                {footer}
            </Modal.Footer>
        </Modal>)
}
