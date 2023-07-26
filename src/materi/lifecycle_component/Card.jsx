import React from "react";
import { Card as CardBootstrap } from "react-bootstrap";

export default function Card(props) {
  return (
    <CardBootstrap className="col-lg-4 col-md-8">
      <CardBootstrap.Img
        variant="top"
        src={props.img || "https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png"}
        style={{ objectFit: "cover", maxHeight: "150px", minHeight: "150px" }}
      />
      <CardBootstrap.Body className="d-flex flex-column">
        <CardBootstrap.Title className="text-truncate">{props.title}</CardBootstrap.Title>
        <CardBootstrap.Text className="">{props.description}</CardBootstrap.Text>
        <a className="btn btn-info mt-auto w-auto text-white me-auto" target="blank" href={props.link} variant="primary">
          See More
        </a>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}