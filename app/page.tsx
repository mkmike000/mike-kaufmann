import Link from 'next/link';
import { client } from '../lib/sanity';

function formatDate(date: string, short = false) {
  const options: Intl.DateTimeFormatOptions = short
    ? { year: 'numeric', month: 'short', day: 'numeric' }
    : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('de-DE', options);
}

const query = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt
}`;

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

export default async function BlogPosts() {
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
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.title}
                </p>
              </div>
            </Link>
          ))
      )}
    </div>
  );
}
