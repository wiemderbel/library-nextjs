import { HttpStatusCode } from "axios";
import connectDB from "@/lib/connectDB";
import Specialite from "@/models/Specialite";
import { NextResponse } from "next/server";

//get by id
export async function GET(_, { params }) {
  try {
    await connectDB();
    const specialite = await Specialite.findById(params.id);
    if (specialite) {
      return NextResponse.json({ specialite });
    }
    return NextResponse.json(
      { message: `Specialite ${params.id} not found` },
      {
        status: HttpStatusCode.NotFound,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

//modifier
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const specialite = await Specialite.findById(params.id);
    if (specialite) {
      const body = await req.json();
      specialite.nomspecialite = body.nomspecialite;
      specialite.save();
      return NextResponse.json({ specialite });
    }
    return NextResponse.json(
      { message: `Specialite ${params.id} not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

//supprimer
export async function DELETE(_, { params }) {
  try {
    await connectDB();
    const specialite = await Specialite.findById(params.id);
    if (specialite) {
      await Specialite.findByIdAndDelete(specialite._id);
      return NextResponse.json({
        message: `Specialite ${params.id} has been deleted`,
      });
    }
    return NextResponse.json(
      { message: `Specialite ${params.id} not found` },
      {
        status: HttpStatusCode.NotFound,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
