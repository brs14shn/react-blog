import Feed from "../components/Feed";

const Home = ({ posts }) => {
  
  console.log(posts);
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display</p>
      )}
    </main>
  );
};

export default Home;
