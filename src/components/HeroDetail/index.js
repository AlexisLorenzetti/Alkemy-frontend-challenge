import React from 'react';
import { Modal } from 'react-bootstrap';

const HeroDetail = ({ show, setShow, name, appearance, work, biography }) => {
    const { "eye-color": eyeColor, "hair-color": hairColor, height, weight} = appearance;
    const { base } = work;
    const { aliases } = biography;
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            centered={true}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    <ul>
                        <li><span className="fw-bold">Weight:</span> {weight[1]}</li>
                        <li><span className="fw-bold">Height:</span> {height[1]}</li>         
                        <li><span className="fw-bold">Aliases:</span> {aliases.join(', ')}</li>
                        <li><span className="fw-bold">Eye Color:</span> {eyeColor}</li>
                        <li><span className="fw-bold">Hair Color:</span> {hairColor}</li>
                        <li><span className="fw-bold">Base:</span> {base}</li>
                    </ul>
                }
            </Modal.Body>
        </Modal>
    );
}

export default HeroDetail;