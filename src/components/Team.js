import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const Team = ({ name, country, logo, founded, venue }) => {
  const articleRef = useRef(null);
  const linksRef = useRef(null);

  let { id } = useParams;

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const articleStyle = articleRef.current.style;
    articleStyle.height = `${linksHeight + 75}px`;
  }, [linksRef]);

  return (
    <article className="team" ref={articleRef}>
      <h1>Now showing Team: {id}</h1>
      <ul ref={linksRef}>
        <div style={{ flexDirection: "row" }}>
          <li>
            <h2>{name}</h2>
          </li>
          <li>
            <img src={logo} alt={name} />
          </li>
        </div>
        <li>
          <p>{country}</p>
        </li>
        <li>
          <p>{venue}</p>
        </li>
        <li>
          <p>{founded ? `Founded ${2021 - founded} years ago` : null}</p>
        </li>
      </ul>
    </article>
  );
};
export default Team;
