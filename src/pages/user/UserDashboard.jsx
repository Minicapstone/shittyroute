import React from "react";
import Greetings from "./Greetings";
import Transaction from "./Transaction";

export const UserDashboard = ({ children }) => {
  return (
    <div className="h-screen flex-1">
      <Greetings></Greetings>
      <Transaction></Transaction>
      {children}
    </div>
  );
};
