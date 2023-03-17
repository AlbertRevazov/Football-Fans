import React, { FC } from "react";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteFavouriteTeam } from "../../redux/features/auth/authSlice";
import { styles } from "./styles";

interface CardProps {
  id: number;
  apiId: string;
  userId: number;
  name: string;
  img: string;
}

export const Card: FC<CardProps> = ({ id, apiId, name, img }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteFavouriteTeam(id));
  };

  return (
    <Box sx={styles.container}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={img} width={40} height={40} alt="emblem" />
          <DeleteIcon
            color="action"
            onClick={handleDelete}
            sx={{ cursor: "pointer" }}
          />
        </Typography>
        <Typography variant="h6">zzz</Typography>
      </CardContent>
      <CardActions>
        <Link
          style={styles.nextLink}
          href={{
            pathname: "/teams/[slug]",
            query: { slug: `${apiId}` },
          }}
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Box>
  );
};
