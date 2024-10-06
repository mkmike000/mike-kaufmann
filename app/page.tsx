import { client } from '../lib/sanity';
import { PortableText } from '@portabletext/react';

export default async function Home() {
  const query = `*[_type == 'blog'] | order(createdAt desc)`;
  const posts = await client.fetch(query);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post: any) => (
          <div key={post._id}>
            <h1 className="text-8xl font-bold text-blue-500">{post.name}</h1>
            <PortableText value={post.beschreibung} />
          </div>
        ))
      )}
    </div>
  );
}
