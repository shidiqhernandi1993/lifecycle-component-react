import React, { Suspense } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import { Container } from "react-bootstrap";
// import Cards from "./Cards";
const Cards = React.lazy(() => import("./Cards"));

export default function LifeCycleComponent() {
  const [q, setQ] = React.useState("");
  const [data, setData] = React.useState([]);
  const APIKEY = "5fd54c824d93467d9a702a8dbe9889f9";

  async function getData(query = "bitcoin", callback) {
    let data = [];
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query || "bitcoin"}&apiKey=${APIKEY}`
      );
      const { articles } = await response.json();
      data = articles;
    } catch (error) {
      data = [];
    } finally {
      callback(data);
    }
  }

  React.useEffect(() => {
    getData(q.length < 3 ? "" : q, (news) => setData(news));
  }, [q]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mt-3">
        <Container as="section">
          <Search q={q} setQ={setQ} />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cards data={data} />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
