import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL, 
    {
      useNewUrlParser: true, //Nouveau Parser d'URL
      //Le nouveau parser gère les connexions de manière plus robuste et permet de gérer certains cas particuliers d'URL qui ne sont pas pris en charge par l'ancien parser.
      useUnifiedTopology: true, //active le nouveau moteur de gestion des connexions 
      // Cela permet de gérer les connexions de manière plus efficace et de résoudre plusieurs problèmes liés à la gestion des connexions, aux événements et aux détections de topologie.
    });
    console.log("connexion a la base de donnée réussie");
  } catch (error) {
    throw new Error("errur de connexion a la base de données");
  }
};
export default connectDB;
