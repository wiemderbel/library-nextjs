import { HttpStatusCode } from "axios";
import connectDB from "@/lib/connectDB";
import Editeur from "@/models/Editeur";
import { NextResponse } from "next/server";

//ajout
export async function POST(req) {
  //res 7adhra
  try {
    await connectDB();
    const body = await req.json();
    const editeur = await Editeur.create(body); //insertion
    return NextResponse.json(
      { editeur, message: "Your editor has been created" },
      { status: HttpStatusCode.Created }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

//liste
export async function GET() {
  try {
    await connectDB();
    const editeurs = await Editeur.find({}, null, { sort: { _id: -1 } });
    return NextResponse.json(editeurs);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
