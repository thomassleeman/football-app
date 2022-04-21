import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <section>
      <div className="loading">
        <ReactLoading type="spin" color="#0c1453" />
      </div>
    </section>
  );
};

export default Loading;
