import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import React, { useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  deleteFavouriteTeam,
  getMyFavouriteTeams,
} from "../../redux/features/auth/authSlice";
//
import { styles } from "./styles";


export const FavouritePage: FC = () => {
  const dispatch = useAppDispatch();
  const { favourite } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getMyFavouriteTeams());
  }, [favourite]);

  return (
    <>
      {!!favourite?.length &&
        favourite.map((team) => (
          <Box key={team.id} sx={styles.root}>
            <Link
              style={styles.nextLink}
              href={{
                pathname: "/teams/[slug]",
                query: { slug: `${team.apiId}` },
              }}
            >
              <Typography sx={styles.title}>{team.name}</Typography>
            </Link>
            <Button
              sx={styles.button}
              onClick={() => {
                dispatch(deleteFavouriteTeam(team.id));
              }}
            >
              <DeleteIcon color="action" />
            </Button>
          </Box>
        ))}
    </>
  );
};
