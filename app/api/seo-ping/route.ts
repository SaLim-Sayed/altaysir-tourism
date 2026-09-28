import { NextResponse } from "next/server";
import { company } from "../../../lib/site-data";

export const runtime = "edge";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let indexNow = "skipped: INDEXNOW_KEY is not configured";
  const indexNowKey = process.env.INDEXNOW_KEY;

  if (indexNowKey) {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ host: new URL(company.siteUrl).host, key: indexNowKey, urlList: [company.siteUrl, `${company.siteUrl}/sitemap.xml`] }),
    });
    indexNow = response.ok ? "submitted" : `failed: ${response.status}`;
  }

  return NextResponse.json({ ok: true, sitemap: `${company.siteUrl}/sitemap.xml`, indexNow });
}
