import { useRouter } from "next/router";
import { useAppSelector } from "../../hooks/hooks";

export const useTeamsHook = () => {
  const { club, isLoading, errorMessage } = useAppSelector(
    (state) => state.teams
  );
  const router = useRouter();
  const { id } = router.query;

  const {
    name,
    shortName,
    tla,
    crest,
    address,
    website,
    founded,
    clubColors,
    venue,
    area,
    squad,
    coach,
    runningCompetitions,
  }: any = club;

  const aboutData = {
    area,
    clubColors,
    founded,
    name,
    venue,
    crest,
    shortName,
    tla,
    runningCompetitions,
    id,
  };
  const contactData = { website, address };
  const squadData = { squad, coach };

  return {
    isLoading,
    id,
    errorMessage,
    contactData,
    squadData,
    aboutData,
    club,
  };
};
