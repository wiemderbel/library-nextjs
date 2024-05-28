import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { addAuteur } from "@/services/auteurService";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Insertauteur = ({ LesAuteurs, setLesAuteurs }) => {
    const [auteur, setAuteur] = useState({});
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlechange = (e) => {
      setAuteur({ ...auteur, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      if (form.checkValidity() === true) {
        //faire le add dans la BD
        addAuteur(auteur)
          .then((res) => {
            console.log(res);
            setLesAuteurs([res.auteur, ...LesAuteurs]);
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
      setAuteur({});
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
              <h2>Ajouter un Auteur</h2>
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
                          name="nomauteur"
                          value={auteur.nomauteur}
                          onChange={(e) => handlechange(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Saisir Nom de l'auteur
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                  </div>
                  <div className="form mt-3">
                    <Row className="mb-2">
                      <Form.Group as={Col} md="12">
                        <Form.Label>Num tel *</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          placeholder="tel"
                          name="numtel"
                          value={auteur.numtel}
                          onChange={(e) => handlechange(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Saisir email de l'auteur
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
                          value={auteur.email}
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
  export default Insertauteur;