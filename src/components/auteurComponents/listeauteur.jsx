"use client";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import NewAuteurComponent from "./newAuteurComponent";
import { deleteAuteur } from "@/services/auteurService";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from 'react-bootstrap/Button';

const ListeAuteur = ({ auteurs }) => {
  const [LesAuteurs, setLesAuteurs] = useState(auteurs);

  //suprimer auteur
  const deleteauteur = (id) => {
    if (window.confirm("supprimer Auteur O/N")) {
      deleteAuteur(id)
        .then((res) => {
          console.log(res);
          setLesAuteurs(LesAuteurs.filter((item) => item._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "nomauteur", //access nested data with dot notation
        header: " Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "numtel", //normal accessorKey
        header: "Num tel",
        size: 200,
      },
      {
        accessorKey: "_id",
        header: "actions",
        size: 100,
        Cell: ({ cell, row }) => (
          <div>
            <Button
              onClick={(e) => {
                deleteauteur(cell.row.original._id, e);
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
    [auteurs]
  );

  const table = useMaterialReactTable({
    columns,
    data: auteurs, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });
  return (
    <div className="mt-5 container">
      <NewAuteurComponent
        LesAuteurs={LesAuteurs}
        setLesAuteurs={setLesAuteurs}
      />

      <MaterialReactTable table={table} />
    </div>
  );
};

export default ListeAuteur;
