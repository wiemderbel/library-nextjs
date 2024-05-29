"use client";
import { useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Button from "react-bootstrap/Button";
import { deleteEditeur } from "@/services/editeurService";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import NewEditeurComponent from "./newEditeurComponent";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import UpdateEditeurComponent from "./updateEditeurComponent";

const Listediteurs = ({ editeurs }) => {
  const [LesEditeurs, setLesEditeurs] = useState(editeurs);

  //pour edit modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [editeur, setEditeur] = useState([]);

  const deleteediteur = (id) => {
    if (window.confirm("supprimer Editeur O/N")) {
      deleteEditeur(id)
        .then((res) => {
          console.log(res);
          setLesEditeurs(LesEditeurs.filter((item) => item._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "maisonedit",
        header: "NOM",
        size: 100,
      },
      {
        accessorKey: "siteweb",
        header: "SITE",
        size: 100,
      },
      {
        accessorKey: "email",
        header: "EMAIL",
        size: 100,
      },
      {
        accessorKey: "_id",
        header: "actions",
        size: 100,
        Cell: ({ cell, row }) => (
          <div>
            <Button
              onClick={() => {
                setEditeur(cell.row.original);
                handleShow();
              }}
              variant="success"
              size="md"
              className="text-success btn-link edit"
            >
              <EditOutlinedIcon />
            </Button>
            <Button
              onClick={(e) => {
                deleteediteur(cell.row.original._id, e);
              }}
              variant="danger"
              size="md"
              className="text-danger btn-link delete"
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        ),
      },
    ],
    [LesEditeurs]
  );
  return (
    <div className="m-3">
      <NewEditeurComponent
        LesEditeurs={LesEditeurs}
        setLesEditeurs={setLesEditeurs}
      />
      <MaterialReactTable columns={columns} data={LesEditeurs} />
      {show ? (
        <UpdateEditeurComponent
          ed={editeur}
          LesEditeurs={LesEditeurs}
          setLesEditeurs={setLesEditeurs}
          show={true}
          setShow={setShow}
        />
      ) : null}
    </div>
  );
};
export default Listediteurs;
