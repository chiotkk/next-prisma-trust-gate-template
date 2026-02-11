import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const project =
    (await prisma.project.findFirst()) ??
    (await prisma.project.create({ data: { name: "Default Project" } }));

  return NextResponse.json({
    ok: true,
    project,
  });
}

