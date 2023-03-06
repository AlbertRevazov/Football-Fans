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

  useEffect(() => {
    if (!!user?.id) {
      dispatch(getMyFavouriteTeams());
    }
  }, [user?.id]);

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
