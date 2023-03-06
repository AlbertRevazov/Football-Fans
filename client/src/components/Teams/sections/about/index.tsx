import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { AboutProps, Favourite } from "../../../../types";
import { styles } from "../../styles";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import {
  addFavouriteTeam,
  deleteFavouriteTeam,
  getMyFavouriteTeams,
} from "../../../../redux/features/auth/authSlice";
import { useRouter } from "next/dist/client/router";

export const AboutTeam: FC<AboutProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAppSelector((state) => state.users);
  const { favourite } = useAppSelector((state) => state?.users);
  const [active, setActive] = useState<boolean>(false);
  const { area, clubColors, crest, founded, name, runningCompetitions, venue } =
    data;

  const isActive = favourite?.find((item) => item.name === name);

  useEffect(() => {
    dispatch(getMyFavouriteTeams());
  }, [active]);

  return (
    <Box sx={styles.sectionBox}>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={crest} style={styles.img} />
        <Box>
          {!isActive?.isFavourite ? (
            <Typography
              sx={{ cursor: "pointer", fontFamily: "Montserrat Alternates" }}
              onClick={() => {
                setActive(!active);
                dispatch(
                  addFavouriteTeam({
                    userId: user?.id,
                    apiId: id,
                    name,
                    img: crest,
                  })
                );
              }}
            >
              <img
                src={"/images/favourite.png"}
                style={{ color: "red", width: "50px" }}
              />
            </Typography>
          ) : (
            <Typography
              sx={{ cursor: "pointer", fontFamily: "Montserrat Alternates" }}
              onClick={() => {
                setActive(!active);
                dispatch(deleteFavouriteTeam(isActive.id));
              }}
            >
              <img
                src={"/images/favourite-active.png"}
                style={{ color: "red", width: "50px" }}
              />
            </Typography>
          )}
        </Box>
      </Box>
      <Box sx={styles.aboutContent}>
        {area?.name && (
          <Typography sx={styles.font}>Страна - {area.name}</Typography>
        )}
        <Typography sx={styles.font}>
          Полное название команды - {name}
        </Typography>
        <Typography sx={styles.font}> Стадион - {venue}</Typography>
        <Typography sx={styles.font}>Год основания - {founded} г.</Typography>
        <Typography sx={styles.font}>Клубные цвета - {clubColors}</Typography>
        <Typography sx={styles.font}>
          Принимает участие -
          {runningCompetitions?.map((tool) => (
            <Box display={"flex"} key={tool.id} alignItems={"center"}>
              <Image src="/images/dot.png" width={30} height={30} alt={""} />
              <Link
                style={{ textDecoration: "none" }}
                href={{
                  pathname: "/competitions/[slug]",
                  query: { slug: `${tool.code}` },
                }}
              >
                <Typography
                  sx={[
                    styles.font,
                    {
                      fontSize: "16px",
                      color: "#202020",
                      ":hover": { color: "#0fabe7" },
                    },
                  ]}
                >
                  {tool.name}
                </Typography>
              </Link>
            </Box>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};
