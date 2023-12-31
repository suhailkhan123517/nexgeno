import getCurrentUser from "@/actions/getCurrentUser";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.YOUR_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const removeImage = async (publicId: string) => {
  try {
    const user = getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const res = await cloudinary.v2.uploader.destroy(publicId);
    console.log("image removed");
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req: Request) {
  const { publicId } = await req.json();
  await removeImage(publicId);
  return NextResponse.json({ message: "success" });
}
