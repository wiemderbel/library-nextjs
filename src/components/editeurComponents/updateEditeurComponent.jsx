import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { editEditeur } from "@/services/editeurService";
const Updateediteur = ({ ed, LesEditeurs, setLesEditeurs, show, setShow }) => {
  const [editeur, setEditeur] = useState(ed);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handlechange = (e) => {
    setEditeur({ ...editeur, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {

      //faire le update dans la BD
      editEditeur(editeur)
        .then((res) => {
          console.log(res);
          
          // faire le update dans le tableau affiché
          setLesEditeurs(
            LesEditeurs.map((myediteur) =>
              myediteur._id === editeur._id ? editeur : myediteur
            )
          );
          //vider le form
          handleClose();
          setValidated(false);
        })
        .catch((error) => {
          console.log(error);
          alert("Erreur ! Modification non effectuée");
        });
    }
    setValidated(true);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <h2>Modifier un Editeurrrr</h2>
          </Modal.Header>
          <Modal.Body>
            <div className="container w-100 d-flex justify-content-center">
              <div>
                <div className="form mt-3">
                  <Row className="mb-2">
                    <Form.Group as={Col} md="12">
                      <Form.Label>Nom *</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Nom"
                        name="maisonedit"
                        value={editeur.maisonedit}
                        onChange={(e) => handlechange(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir Nom de l'éditeur
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </div>
                <div className="form mt-3">
                  <Row className="mb-2">
                    <Form.Group as={Col} md="12">
                      <Form.Label>Site web *</Form.Label>
                      <Form.Control
                        required
                        type="url"
                        placeholder="Site"
                        name="siteweb"
                        value={editeur.siteweb}
                        onChange={(e) => handlechange(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir Site de l'éditeur
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </div>
                <div className="form mt-3">
                  <Row className="mb-2">
                    <Form.Group as={Col} md="12">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={editeur.email}
                        onChange={(e) => handlechange(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Saisir Email de l'éditeur
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Enregistrer</Button>
            <Button
              type="button"
              className="btn btnwarning"
              onClick={() => handleClose()}
            >
              Annuler
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
export default Updateediteur;
