import { HttpStatusCode } from "axios";//pour utiliser les codes de statut HTTP de manière lisible et standardisée.
import connectDB from "@/lib/connectDB";
import Auteur from "@/models/Auteur";
import { NextResponse } from "next/server"; // Utilisé pour créer des réponses HTTP dans les routes API Next.js.

//ajout
export async function POST(req) {  //res 7adhra
  try {
    await connectDB();
    const body = await req.json();
    const auteur = await Auteur.create(body);  //insertion
    return NextResponse.json(
      { auteur, message: "Your author has been created" },
      { status: HttpStatusCode.Created }// Retourne une réponse JSON avec le nouvel auteur et un message de succès
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }// Statut de la réponse en cas d'erreur (400 Bad Request)
    );
  }
}

//liste des auteurs
export async function GET() {
  try {
    await connectDB();
    const auteurs = await Auteur.find();
    return NextResponse.json(auteurs);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
