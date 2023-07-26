import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search(props) {
  return (
    <InputGroup className="mb-3 mx-auto shadow-sm" style={{ maxWidth: "600px" }}>
      <Form.Control
        onChange={(e) => props.setQ(e.target.value)}
        placeholder="Search News (at least have 3 character)"
        aria-describedby="basic-addon1"
        value={props.q}
      />
    </InputGroup>
  );
}
