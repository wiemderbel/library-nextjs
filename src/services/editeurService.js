const EDITEUR_API = "editeurs/";

//fetchediteurs
export const fetchEditeurs = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API, {
    cache: "no-store", //les donners y7othom fi cache //no store mat5abich f cache 
  });
  const response = await res.json();
  return response;
};

//fetchediteurbyid
export const fetchEditeurById = async (editeurId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + EDITEUR_API + `${editeurId}`,
    { cache: "no-store" },
    {
      method: "GET",
    }
  );
  const response = await res.json();
  return response;
};

//deleteEditeur
export const deleteEditeur = async (editeurId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + EDITEUR_API + `${editeurId}`,
    {
      method: "DELETE",
    }
  );
  const response = await res.json();
  return response;
};

//addEditeur
export const addEditeur = async (editeur) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editeur),
  });
  const response = await res.json();
  return response;
};

//editEditeur
export const editEditeur = async (editeur) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + EDITEUR_API + `${editeur._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editeur),
    }
  );
  const response = await res.json();
  return response;
};
