import { logout } from "@/redux/features/AuthSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";

export const Main = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      Main <span onClick={() => dispatch(logout())}>EXIT</span>
    </div>
  );
};
