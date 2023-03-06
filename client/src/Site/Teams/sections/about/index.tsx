import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { AboutProps } from "../../../../types";
import { styles } from "../../styles";
import { FC, useEffect } from "react";
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
  const { area, clubColors, crest, founded, name, runningCompetitions, venue } =
    data;

  const isActive = favourite?.find((item) => item.name === name);
  const active = !isActive?.isFavourite;

  useEffect(() => {
    dispatch(getMyFavouriteTeams());
  }, []);

  return (
    <Box sx={styles.sectionBox}>
      <Box sx={styles.aboutRoot}>
        <img src={crest} style={styles.img} />
        <Box>
          {active ? (
            <Box
              sx={{ cursor: "pointer", fontFamily: "Montserrat Alternates" }}
              onClick={() => {
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
              <img style={{ width: "40px" }} src={"/images/favourite.png"} />
            </Box>
          ) : (
            <Typography
              sx={{ cursor: "pointer", fontFamily: "Montserrat Alternates" }}
              onClick={() => {
                dispatch(deleteFavouriteTeam(isActive.id));
              }}
            >
              <img
                style={{ width: "40px" }}
                src={"/images/favourite-active.png"}
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
