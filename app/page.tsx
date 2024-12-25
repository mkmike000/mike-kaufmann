import Link from 'next/link';
import { client } from '../lib/sanity';

// Funktion zur Formatierung des Datums
function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short', // Kurzer Monatsname
    day: 'numeric', // Tag als Zahl
    year: 'numeric', // Jahr vierstellig
  };
  return new Date(date).toLocaleDateString('de-DE', options); // Alternativ 'de-DE' für deutsches Format
}

// Query mit publishedAt-Feld
const query = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  name,
  slug,
  publishedAt
}`;

interface BlogPost {
  _id: string;
  name: string;
  slug: { current: string };
  publishedAt: string;
}

export default async function BlogPosts() {
  // Daten von Sanity abrufen
  const posts: BlogPost[] = await client.fetch(query);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts
          .filter((post) => post.slug && post.slug.current) // Nur gültige Slugs zulassen
          .sort((a, b) => {
            const dateA = new Date(a.publishedAt || '');
            const dateB = new Date(b.publishedAt || '');
            return dateA > dateB ? -1 : 1;
          })
          .map((post) => (
            <Link
              key={post._id}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug.current}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                  {formatDate(post.publishedAt)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.name}
                </p>
              </div>
            </Link>
          ))
      )}
    </div>
  );
}
