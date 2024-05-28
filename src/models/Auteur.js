import mongoose from "mongoose";
//mongoose  bibliothèque ODM (Object Data Modeling) pour MongoDB et Node.js, facilitant l'interaction avec la base de données.
var auteurSchema = mongoose.Schema(
  {
    nomauteur: String,
    email: String,
    numtel: String,
  },
  {
    timestamps: true,
  }
);

const Auteur = mongoose.models.Auteur || mongoose.model("Auteur", auteurSchema);// Création du modèle Auteur ou utilisation de l'existant
export default Auteur;
