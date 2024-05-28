import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { addEditeur } from "@/services/editeurService";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Insertediteur = ({ LesEditeurs, setLesEditeurs }) => {
  const [editeur, setEditeur] = useState({});
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlechange = (e) => {
    setEditeur({ ...editeur, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      //faire le add dans la BD
      addEditeur(editeur)
        .then((res) => {
          console.log(res);
          setLesEditeurs([res.editeur, ...LesEditeurs]);
          handleReset();
          setValidated(false);
        })
        .catch((err) => {
          window.alert(err);
        });
    }
    setValidated(true);
  };
  const handleReset = () => {
    setEditeur({});
    handleClose();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <Button variant="dark" size="sm"
            onClick={handleShow}
            style={{
                textDecoration: "none",
                color: "pink",
                fontSize: 14,
              }}
          >
            <AddCircleOutlineIcon /> Nouveau
          </Button>


          
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <h2>Ajouter un Editeur</h2>
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
              onClick={() => handleReset()}
            >
              Annuler
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
export default Insertediteur;
