const LIVRE_API = "livres/";

//fetchlivres
export const fetchLivres = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + LIVRE_API, {
    cache: "no-store", //les donners y7othom fi cache //no store mat5abich f cache 
  });
  const response = await res.json();
  return response;
};

//fetchlivrebyid
export const fetchLivreById = async (livreId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + LIVRE_API + `${livreId}`,
    { cache: "no-store" },
    {
      method: "GET",
    }
  );
  const response = await res.json();
  return response;
};

//deleteLivre
export const deleteLivre = async (livreId) => {
  const res = await fetch(
    "http://localhost:3000/api/livres/"  + `${livreId}`,
    {
      method: "DELETE",
    }
  );
  const response = await res.json();
  return response;
};

//addLivre
export const addLivre = async (livre) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + LIVRE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(livre),
  });
  const response = await res.json();
  return response;
};

//editLivre
export const editLivre = async (livre) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + LIVRE_API + `${livre._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livre),
    }
  );
  const response = await res.json();
  return response;
};
