const articles = [
    { id: 1, title: "First Article", content: "Detailed content of the first article." },
    { id: 2, title: "Second Article", content: "Detailed content of the second article." },
    { id: 3, title: "Third Article", content: "Detailed content of the third article." },
  ];
  
  export default function ArticlePage({ params }) {
    const { id } = params;
  
    const article = articles.find((art) => art.id.toString() === id);
  
    if (!article) {
      return <div>Article not found</div>;
    }
  
    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
    );
  }
  