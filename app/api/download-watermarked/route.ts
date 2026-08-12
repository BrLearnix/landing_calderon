import { NextRequest } from "next/server";
import path from "node:path";
import fs from "node:fs/promises";
import sharp from "sharp";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  const name = request.nextUrl.searchParams.get("name");

  if (!src) {
    return new Response("Falta el parámetro src", { status: 400 });
  }

  const publicDir = path.join(process.cwd(), "public");
  const filePath = path.join(publicDir, src.replace(/^\/+/, ""));
  if (!filePath.startsWith(publicDir)) {
    return new Response("Ruta inválida", { status: 400 });
  }

  try {
    const [imageRaw, logoRaw] = await Promise.all([
      fs.readFile(filePath),
      fs.readFile(path.join(publicDir, "img", "logo1.avif")),
    ]);

    const image = sharp(imageRaw);
    const meta = await image.metadata();
    const w = meta.width ?? 600;
    const h = meta.height ?? 450;

    const watermarkSize = Math.round(Math.min(w, h) * 0.3);
    const logoBuffer = await sharp(logoRaw, { animated: false })
      .resize(watermarkSize, watermarkSize, { fit: "inside" })
      .png()
      .toBuffer();

    const watermarked = await image
      .composite([
        {
          input: logoBuffer,
          gravity: "center",
          opacity: 0.5,
          blend: "over",
        } as sharp.OverlayOptions,
      ])
      .jpeg({ quality: 90 })
      .toBuffer();

    const downloadName = name || `watermarked_${Date.now()}.jpg`;

    return new Response(new Uint8Array(watermarked), {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response("No se pudo procesar la imagen", { status: 500 });
  }
}