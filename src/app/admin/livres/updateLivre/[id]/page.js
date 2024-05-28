import { fetchLivreById } from "@/services/livreService";
import UpdateLivre from "@/components/livreComponents/updateLivreComponent";
import { fetchEditeurs } from "@/services/editeurService";
import { fetchSpecialites } from "@/services/specialiteService";
import { fetchAuteurs } from "@/services/auteurService";
const getlivre = async (id) => {
  const data = await fetchLivreById(id);
  return data;
};
const getEditeurs = async () => {
  const data = await fetchEditeurs();
  return data;
};
const getSpecialites = async () => {
  const data = await fetchSpecialites();
  return data;
};
const getAuteurs = async () => {
  const data = await fetchAuteurs();
  return data;
};
const LivreUpdatePage = async ({ params }) => {
  const livre = await getlivre(params.id);
  const editeurs = await getEditeurs();
  const specialites = await getSpecialites();
  console.log(specialites);
  const auteurs = await getAuteurs();
  return (
    <div>
      <UpdateLivre
        livre={livre}
        LesEditeurs={editeurs}
        lesSpecialites={specialites}
        lesAuteurs={auteurs}
      />
    </div>
  );
};
export default LivreUpdatePage;
