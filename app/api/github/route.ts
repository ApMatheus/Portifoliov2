import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  try {
    const gqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
          viewer {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }`,
      }),
    });

    const gqlData = await gqlRes.json();
    const contributions = gqlData.data.viewer.contributionsCollection.contributionCalendar.totalContributions;

    return NextResponse.json({ data: contributions, status: 200 });
  } catch (error) {
    console.error("Erro ao buscar dados do GitHub:", error);
    return NextResponse.json({ data: error, status: 500 });
  }
}