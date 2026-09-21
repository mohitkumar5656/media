import { useEffect, useState } from "react";
import Newitem from "../Component/Newitem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const [q, setQ] = useState("india");
  const [language, setLanguage] = useState("hi");

  const [searchParams] = useSearchParams();

  const getApiData = async (search, lang) => {
    try {
      const response = await fetch(
        `/api/news?q=${encodeURIComponent(search)}&language=${lang}&page=1`
      );

      const data = await response.json();

      console.log("API DATA:", data);

      if (data.status === "ok") {
        setArticles(data.articles || []);
        setTotalResults(data.totalResults || 0);
        setPage(1);
      } else {
        console.log("API ERROR:", data);
        setArticles([]);
      }
    } catch (error) {
      console.log("FETCH ERROR:", error);
      setArticles([]);
    }
  };

  const fetchData = async () => {
    try {
      const nextPage = page + 1;

      const response = await fetch(
        `/api/news?q=${encodeURIComponent(q)}&language=${language}&page=${nextPage}`
      );

      const data = await response.json();

      if (data.status === "ok") {
        setArticles((oldArticles) => [
          ...oldArticles,
          ...(data.articles || [])
        ]);

        setPage(nextPage);
      }
    } catch (error) {
      console.log("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    const search = searchParams.get("q") || "india";
    const lang = searchParams.get("language") || "hi";

    setQ(search);
    setLanguage(lang);

    getApiData(search, lang);
  }, [searchParams]);

  return (
    <div className="container-fluid my-4">
      <h5 className="text-center text-capitalize">
        {q} News Articles
      </h5>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <div className="row">
          {articles.map((item, index) => (
            <Newitem
              key={index}
              source={item.source?.name}
              title={item.title}
              description={item.description}
              url={item.url}
              pic={item.urlToImage}
              Date={item.publishedAt}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;