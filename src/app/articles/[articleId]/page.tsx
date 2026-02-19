// Server components Support async and await but Client components does not support

import Link from "next/link";
export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "sp" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>New Article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div>
        <Link href={"/articles/id?lang=en"}>English</Link>
        <Link href={"/articles/id?lang=sp"}>Spanish</Link>
        <Link href={"/articles/id?lang=fr"}>French</Link>
      </div>
    </div>
  );
}
