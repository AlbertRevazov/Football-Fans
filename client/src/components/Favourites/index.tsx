import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addFavouriteTeam,
  deleteFavouriteTeam,
  getMyFavouriteTeams,
} from "../../redux/features/auth/authSlice";
import {
  getAllAvailableCompetitions,
  getTeamsOfCompetition,
} from "../../redux/features/favourites/favouriteSlice";
import { styles } from "./styles";

interface teamProps {
  userId: number | null;
  apiId: number | null;
  name: string;
  img: string;
}

export const FavouritePage: FC = () => {
  const dispatch = useAppDispatch();
  const { favourite } = useAppSelector((state) => state.users);
  const { user } = useAppSelector((state) => state.users);
  const { areas } = useAppSelector((state) => state.favourites);

  const [team, setTeam] = useState<teamProps>({
    userId: null,
    apiId: null,
    name: "",
    img: "",
  });

  useEffect(() => {
    if (!!user?.id) {
      dispatch(getMyFavouriteTeams());
    }
  }, [user?.id]);

  const getAllCompetitionHandler = () => {
    dispatch(getAllAvailableCompetitions());
  };

  const getListTeamOfCompetitionHandler = (e: any) => {
    dispatch(getTeamsOfCompetition(e.currentTarget.id));
  };

  return (
    <>
      {!!favourite?.length ? (
        favourite.map((team) => (
          <Box key={team.id} sx={{ display: "flex", alignItems: "center" }}>
            <Box>{team.name}</Box>
            <Button
              onClick={() => {
                dispatch(deleteFavouriteTeam(team.id));
              }}
            >
              X
            </Button>
          </Box>
        ))
      ) : (
        <Box>
          {!areas?.count ? (
            <Box sx={styles.root}>
              <Typography sx={styles.title}>
                У вас пока нет избранных команд
              </Typography>
              <Button sx={styles.button} onClick={getAllCompetitionHandler}>
                Выбрать
              </Button>
            </Box>
          ) : (
            areas?.competitions?.map((el: any) => (
              <Box
                key={el.id}
                id={el.id}
                onClick={getListTeamOfCompetitionHandler}
              >
                <Typography>{el.name}</Typography>
              </Box>
            ))
          )}
          {!!areas?.teams &&
            areas?.teams?.map((el: any) => (
              <Box
                key={el.id}
                id={el.id}
                onClick={() => {
                  if (!!user?.id) {
                    setTeam({
                      userId: user?.id,
                      apiId: el.id,
                      name: el.name,
                      img: el.crest,
                    });
                  }
                  if (team.userId) {
                    dispatch(addFavouriteTeam(team));
                  }
                }}
              >
                <Typography>{el.name}</Typography>
              </Box>
            ))}
        </Box>
      )}
    </>
  );
};
