import React, { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  checkIsAuth,
  getMyFavouriteTeams,
} from "../../redux/features/auth/authSlice";
import { Card } from "../../Common/Card";

interface FavouritePageProps {}

export const FavouritePage: FC<FavouritePageProps> = React.memo(() => {
  const dispatch = useAppDispatch();
  const { favourite } = useAppSelector((state) => state.users);
  const isAuth = useAppSelector(checkIsAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getMyFavouriteTeams());
    }
  }, [dispatch, isAuth]);

  return (
    <Box sx={{ minHeight: "650px", display: "flex" }}>
      {isAuth &&
        favourite?.map((team) => (
          <Card
            key={team.id}
            id={team.id}
            apiId={team.apiId}
            name={team.name}
            userId={team.user_id}
            img={team.img}
          />
        ))}
    </Box>
  );
});
