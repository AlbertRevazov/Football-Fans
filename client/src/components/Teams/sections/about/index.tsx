import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { AboutProps } from "../../../../types";
import { styles } from "../../styles";

export const AboutTeam: React.FC<AboutProps> = ({ data }) => {
  const { area, clubColors, crest, founded, name, runningCompetitions, venue } =
    data;

  return (
    <Box sx={styles.sectionBox}>
      <Box sx={{ padding: "20px" }}>
        <img src={crest} style={styles.img} />
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
            <Box display={"flex"} alignItems={"center"}>
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
