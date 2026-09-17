import { useEffect, useState } from "react";
import Newitem from "../Component/Newitem";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page,setPage] = useState(1)

    const [q, setQ] = useState("All")
    const [language, setLanguage] = useState("hi")
    const [searchParams] = useSearchParams()

    async function getApiData(q, language) {

        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&language=${language}&page=1&pageSize=24&apiKey=585dbe55016a435db71ad014fe8045a0`
        );

        const data = await response.json();

        if (data.status === "ok") {
            setArticles(data.articles);          // ✅ fixed
            setTotalResults(data.totalResults);  // ✅ fixed
        }

    }
    let fetchData = async()=>{
            setPage(page+1)
         const response = await fetch(
            `https://newsapi.org/v2/everything?q=${q}&sortBy=publishedAt&language=${language}&page=${page}&pageSize=24&apiKey=585dbe55016a435db71ad014fe8045a0`
        );

        const data = await response.json();

        if (data.status === "ok") {
            setArticles(articles.concat(data.articles));          
             
        }
    }
    useEffect(() => {
        (() => {
            let q = searchParams?.get("q") ?? "All"
            let language = searchParams?.get("language") ?? "hi"
            setQ(q)
            setLanguage(language)
            getApiData(q, language)
        })()
    }, [searchParams])



    return (
        <div className="container-fluid my-4">
            <h5 className="text-center text-capitalize">
                {q} News Articles
            </h5>
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={articles.length<totalResults}
                loader={<h4>Loading...</h4>}
               
            >

            <div className="row">
                {articles.map((item, index) => (
                    <Newitem
                        key={index}
                        source={item.source.name}
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
