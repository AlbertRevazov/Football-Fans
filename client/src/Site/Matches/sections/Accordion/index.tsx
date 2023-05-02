import React, { FC } from "react";
import { Box } from "@mui/material";
import { useMatchesHook } from "../../hooks";
import { useAppSelector } from "../../../../hooks/hooks";
import { Error } from "../../../../Common/Error";
import { CustomAccordion } from "../../../../Common/Accordion";
import { Match } from "./Match";
import { Matches } from "../../../../types";

interface MatchesAccordionProps {}

export const MatchesAccordion: FC<MatchesAccordionProps> = () => {
  const { competionsTodayNames, competitionsNames } = useMatchesHook();
  const { games, errorMessage } = useAppSelector((state) => state.matches);

  return (
    <>
      {!!errorMessage ? (
        <Error errorMessage={errorMessage} />
      ) : (
        competitionsNames.map((competitionName: string, index: number) => {
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
    </>
  );
};
