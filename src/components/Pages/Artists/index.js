import React from "react";

import NavBar from "../../NavBar";
import Dashboard from "../../Dashboard";

// consider this data arrived from the API
// <donotmodify>
const artists = [
  { _id: "1", firstName: "Annie", lastName: "Walker" },
  { _id: "2", firstName: "Lynda", lastName: "Dubovich" },
  { _id: "3", firstName: "Jessica", lastName: "Gonsalez" },
  { _id: "4", firstName: "Kate", lastName: "Banksy" }
];
// </donotmodify>

export default () => {
  return (
    <div>
      <NavBar />
      <Dashboard artists={artists} />
    </div>
  );
};
