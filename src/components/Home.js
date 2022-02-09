import NewsList from "./newsList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: articles,
  } = useFetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f0ee8e01ac7440f9b75408187b7cbaab"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {articles && <NewsList articles={articles} title="News List" />}
    </div>
  );
};

export default Home;
