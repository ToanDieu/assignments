import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";

export default function NoResult() {
  return (
    <Container className={"list-forecast"}>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h1 className={"text-center"}>No result</h1>
        </Col>
      </Row>
    </Container>
  );
}
