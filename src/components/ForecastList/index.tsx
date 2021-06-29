import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

import "./index.scss";

import ForecastItem from "../ForecastItem";
import { LIST_DATA, FORECAST_ITEM_RES } from "../../dto";
import NoResult from "../NoResult";

type Props = {
  data: LIST_DATA;
};

export default function ForecastList({ data }: Props) {
  return (
    <React.Fragment>
      {data && data.forecast && data.forecast.length > 0 ? (
        <Container className={"list-forecast"}>
          <Row>
            <Col sm={2} md={2} lg={2}>
              {data && data.title && (
                <>
                  <span className={"list-forecast__city"}>{data.title}</span>
                  <span className={"list-forecast__current"}>
                    {moment().format("HH:mm a")}
                  </span>
                </>
              )}
            </Col>
            {data &&
              data.forecast &&
              data.forecast.map((item: FORECAST_ITEM_RES, index: number) => {
                return (
                  <Col key={index} sm={2} md={2} lg={2}>
                    <ForecastItem
                      applicable_date={item.applicable_date}
                      max_temp={item.max_temp}
                      min_temp={item.min_temp}
                      weather_state_abbr={item.weather_state_abbr}
                      weather_state_name={item.weather_state_name}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      ) : (
        <NoResult />
      )}
    </React.Fragment>
  );
}
