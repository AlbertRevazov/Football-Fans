import { useState, useCallback } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useRouter } from "next/router";
import { Standings } from "../../types";

// интерфейс для ввода возвращаемого значения
interface UseCompetitionHookProps {
  handleClick: () => void;
  handleDisableClick: () => void;
  // типы к переменным состояния scorers.
  scorers: boolean;
  isLoading: boolean;
  errorMessage: string | null | undefined;
  data: Standings[] | undefined;
  id: string | undefined;
}

export const useCompetitionHook = (): UseCompetitionHookProps => {
  const { id } = useRouter().query;
  const [scorers, setScorers] = useState<boolean>(false);
  const { isLoading, errorMessage, tournament } = useAppSelector(
    (state) => state.competitions
  );
  const data: Standings[] | undefined = tournament?.standings;

  const handleDisableClick = useCallback(() => {
    setScorers(false);
  }, []);

  const handleClick = useCallback(() => {
    setScorers(true);
  }, []);

  return {
    handleClick,
    handleDisableClick,
    scorers,
    isLoading,
    errorMessage,
    data,
    id: id as string | undefined,
  };
};
