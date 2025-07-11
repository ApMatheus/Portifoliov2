
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const response = await fetch(`https://api.cosmicjs.com/v3/buckets/${process.env.COSMIC_BUCKET_SLUG}/objects/6868607fe2edd1616a3190ea?pretty=true&read_key=${process.env.COSMIC_READ_KEY}&depth=1&props=slug,title,metadata,type`);
    const data = await response.json();

    return NextResponse.json({ data, status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ data: error, status: 500 });
  }
}
