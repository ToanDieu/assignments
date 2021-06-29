import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";
import { fetchForeCast } from "../../actions";
import LoadingIndicator from "../../components/LoadingIndicator";
import ForecastList from "../../components/ForecastList";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: { foreCast: any }) => state.foreCast
  );
  const [loadingSt, setLoadingSt] = useState(loading);
  const [errorSt, setErrorSt] = useState(error);
  const [dataSt, setDataSt] = useState(data || []);

  React.useEffect(() => {
    setLoadingSt(loading);
    setErrorSt(error);
    setDataSt(data);
  }, [loading, error, data]);

  const handleSearch = (val: string | "") => {
    val && dispatch(fetchForeCast(val));
  };

  return (
    <div className="app">
      <SearchInput onKeyPress={handleSearch} />
      {loadingSt && !error ? (
        <LoadingIndicator />
      ) : (
        <ForecastList data={dataSt} />
      )}
      {errorSt && <h1>Something went wrong!!!</h1>}
    </div>
  );
};

export default Home;
