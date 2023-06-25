import { Box } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { useMatchesHook } from "../../hooks";
import { Error } from "../../../../Common/Error";
import { CustomAccordion } from "../../../../Common/Accordion";
import { Match } from "../Accordion/Match";
import { Matches } from "../../../../types";
import styles from "./MobileAccordion.module.scss";

export const MobileAccordion: FC = () => {
  const { competionsTodayNames, competitionsNames } = useMatchesHook();
  const { games, errorMessage } = useAppSelector((state) => state.matches);

  return (
    <Box className={styles.root}>
      {!!errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        competitionsNames.map((competitionName: string, index) => {
          return (
            <CustomAccordion
              key={index}
              competitionName={competitionName}
              emblemSrc={competionsTodayNames[competitionName]}
            >
              {games?.map((game: Matches) => {
                return (
                  <Box key={game.id}>
                    {competitionName === game?.competition?.name && (
                      <Match game={game} />
                    )}
                  </Box>
                );
              })}
            </CustomAccordion>
          );
        })
      )}
    </Box>
  );
};
