const AUTEUR_API = "auteurs/";

//fetchauteurs
export const fetchAuteurs = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API, {
    cache: "no-store", //les donners y7othom fi cache //no store mat5abich f cache 
  });
  const response = await res.json();
  return response;
};

//fetchauteurbyid
export const fetchAuteurById = async (auteurId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + AUTEUR_API + `${auteurId}`,
    { cache: "no-store" },
    {
      method: "GET",
    }
  );
  const response = await res.json();
  return response;
};

//deleteAuteur
export const deleteAuteur = async (auteurId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + AUTEUR_API + `${auteurId}`,
    {
      method: "DELETE",
    }
  );
  const response = await res.json();
  return response;
};

//addAuteur
export const addAuteur = async (auteur) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(auteur),
  });
  const response = await res.json();
  return response;
};

//editAuteur
export const editAuteur = async (auteur) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + AUTEUR_API + `${auteur._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auteur),
    }
  );
  const response = await res.json();
  return response;
};
