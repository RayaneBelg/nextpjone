'use client';

import Link from 'next/link';

const articles = [
  { id: 1, title: "First Article", description: "Brief summary of the first article." },
  { id: 2, title: "Second Article", description: "Brief summary of the second article." },
  { id: 3, title: "Third Article", description: "Brief summary of the third article." },
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to our blog. Click an article to read more.</p>
      <div>
        {articles.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link href={`/blog/${article.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
