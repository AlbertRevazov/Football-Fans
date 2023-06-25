import React, { FC } from "react";
import { Welcome } from "./section/Welcome";
import { Service } from "./section/Service";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  return (
    <>
      <Welcome />
      <Service />
    </>
  );
};
