import React from "react";
import Card from "./Card";
import { Container, Row } from "react-bootstrap";

export default function Cards({ data }) {
  return (
    <Container className="container mt-3">
      <Row>
        {data.length === 0 ? (
          <h1 className="text-center">Tidak ada Berita disini</h1>
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              link={item.url}
              img={item.urlToImage}
            />
          ))
        )}
      </Row>
    </Container>
  );
}