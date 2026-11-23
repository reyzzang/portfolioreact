import { useState, useEffect } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import PostCard from "../components/PostCard.jsx";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((response) => {
        if (!response.ok) {
          throw new Error("მონაცემების ჩატვირთვა ვერ მოხერხდა");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          number="04"
          title="სტატიები და ჩანაწერები"
          subtitle="მონაცემები მიღებულია JSONPlaceholder API-დან ძებნის ფუნქციონალით"
        />

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="ძებნა სათაურით ან ტექსტით..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearchQuery("")}
            >
              გასუფთავება
            </button>
          )}
        </div>

        {loading && <p className="status-message">იტვირთება მონაცემები...</p>}
        {error && <p className="status-message error-text">{error}</p>}

        {!loading && !error && (
          <>
            <p className="results-count">
              ნაპოვნია: {filteredPosts.length} ჩანაწერი
            </p>

            {filteredPosts.length > 0 ? (
              <div className="projects-grid">
                {filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                  />
                ))}
              </div>
            ) : (
              <p className="status-message">
                თქვენი მოთხოვნით ჩანაწერი ვერ მოიძებნა.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}