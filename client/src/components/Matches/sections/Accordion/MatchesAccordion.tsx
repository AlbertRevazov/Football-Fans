import React from "react";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useMatchesHook } from "../../hooks";
import { Matches } from "../../../../types";
import { useAppSelector } from "../../../../hooks/hooks";
import { styles } from "../../styles";
import { errorsData } from "../../../../utils/constants";
import Link from "next/link";

export const MatchesAccordion: React.FC = () => {
  const { competionsTodayNames, competitionsNames } = useMatchesHook();
  const { games, errorMessage } = useAppSelector((state) => state.matches);
  console.log(competitionsNames);

  return (
    <>
      {!!errorMessage ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alighItems: "center",
            margin: "60px",
          }}
        >
          <Typography sx={[styles.font, { color: "red" }]}>
            {errorsData[`${errorMessage}`]}
          </Typography>
        </Box>
      ) : (
        competitionsNames.map((item: string, index) => {
          return (
            <>
              <Accordion
                sx={{
                  margin: "15px",
                  borderRadius: "8px",
                  background: "floralwhite",
                }}
                key={index}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={styles.font}>
                    <img
                      src={competionsTodayNames[item]}
                      style={styles.emblem}
                    />
                    {item}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {games?.map((game: Matches) => {
                    return (
                      <Box key={game.id}>
                        {item === game?.competition?.name && (
                          <Box sx={styles.match} key={game.id}>
                            <Box sx={styles.accordionRoot}>
                              <Typography
                                sx={[styles.font, { fontSize: "20px" }]}
                              >
                                Тур {game.season.currentMatchday}
                              </Typography>

                              <img
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  marginLeft: "8px",
                                }}
                                src={game.competition.emblem}
                              />
                            </Box>

                            <Box>
                              <Box
                                sx={[styles.refereeBox, { marginTop: "10px" }]}
                              >
                                <Link
                                  style={styles.nextLink}
                                  href={{
                                    pathname: "/teams/[slug]",
                                    query: { slug: `${game.homeTeam.id}` },
                                  }}
                                >
                                  <Typography
                                    sx={[
                                      styles.font,
                                      { ":hover": { color: "darkseagreen" } },
                                    ]}
                                  >
                                    <img
                                      style={styles.emblem}
                                      src={game.homeTeam.crest}
                                    />
                                    {game.homeTeam.name} :
                                  </Typography>
                                </Link>
                                <Link
                                  style={styles.nextLink}
                                  href={{
                                    pathname: "/teams/[slug]",
                                    query: { slug: `${game.awayTeam.id}` },
                                  }}
                                >
                                  <Typography
                                    sx={[
                                      styles.font,
                                      {
                                        marginLeft: "8px",
                                        ":hover": { color: "#d28188" },
                                      },
                                    ]}
                                  >
                                    {game.awayTeam.name}{" "}
                                    <img
                                      style={styles.emblem}
                                      src={game.awayTeam.crest}
                                    />
                                  </Typography>
                                </Link>
                              </Box>
                              {!!game.referees.length && (
                                <Box
                                  sx={[
                                    styles.refereeBox,
                                    { marginTop: "10px" },
                                  ]}
                                >
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/referee.png"
                                  />
                                  <Typography sx={styles.refereeTitle}>
                                    {game.referees[0]?.name}
                                  </Typography>
                                  <Typography sx={styles.refereeTitle}>
                                    {game.referees[0]?.nationality}
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </>
          );
        })
      )}
    </>
  );
};
