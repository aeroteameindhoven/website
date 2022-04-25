import * as React from "react";
import "../components/styles/teams.scss";
import { teamMembers } from "../components/TeamMembers";

const Teams = () => {
  return (
    <>
      <div className="members-container">
        {teamMembers.map((data, key) => {
          return (
            <div key={key}>
              {data.year + " , " + data.team + " , " + data.firstName + " , " + data.lastName + " , " + data.period}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Teams;
