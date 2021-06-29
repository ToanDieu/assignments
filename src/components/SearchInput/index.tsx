import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

import IconSearch from "../../assets/icons/icon-search.svg";

import "./index.scss";

type Props = {
  onKeyPress: Function;
  placeholder?: string;
};

const SearchInput = ({
  onKeyPress,
  placeholder = "Enter city name",
}: Props) => {
  const [val, setVal] = useState("");
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onKeyPress(val);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <Container className={"search-input"}>
      <Row className={"search-input__content content"}>
        <Col sm={8} md={8} lg={8}></Col>
        <Col sm={4} md={4} lg={4}>
          <div>
            <img
              className={"content__icon"}
              alt="icon serach"
              src={IconSearch}
            />
            <Form.Control
              onChange={onChange}
              onKeyPress={onKeyPressHandler}
              className={"content__input"}
              value={val}
              placeholder={placeholder}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(SearchInput);
