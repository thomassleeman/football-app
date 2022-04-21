import React from "react";
import { useGlobalContext } from "../context";
import Team from "./Team";

const Teams = () => {
  const { teams } = useGlobalContext();
  return (
    <section className="section">
      <div className="teams-center">
        {teams.map((item) => {
          return <Team key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Teams;
