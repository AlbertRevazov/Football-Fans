import { useAppSelector } from "../../hooks/hooks";
import { CompetitionsToday, UseMatchesHookReturnType } from "./types";



export const useMatchesHook = (): UseMatchesHookReturnType => {
  const { games, isLoading, errorMessage } = useAppSelector(
    (state) => state.matches
  );

  // filter competitions that are available and add in object
  const competitionsToday = (): CompetitionsToday => {
    const competitionEmblems: CompetitionsToday = {};
    if (!!games?.length) {
      games.map((item) => {
        return (competitionEmblems[item.competition.name] =
          item.competition.emblem);
      });
    }
    return competitionEmblems;
  };

  const competionsTodayNames = competitionsToday();
  //just competition names array for accordion list
  const competitionsNames = Object.keys(competionsTodayNames);

  return { competionsTodayNames, competitionsNames, isLoading, errorMessage };
};
