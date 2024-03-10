import React, { FC } from "react";
import { logout } from "@/redux/features/AuthSlice";
import { useAppDispatch } from "@/redux/hooks";
import styles from "./Main.module.scss";

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      Main <span onClick={() => dispatch(logout())}>EXIT</span>
    </div>
  );
};
