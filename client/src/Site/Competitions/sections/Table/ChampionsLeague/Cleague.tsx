import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { FC } from "react";
import { styles } from "../../../styles";
import { useAppSelector } from "../../../../../hooks/hooks";
import { Loading } from "../../../../../Common/Loading";
import { CLeagueTableRow } from "./CLeagueTableRow";
import { Standings, TeamTable } from "../../../types";

interface CleagueProps {
  data: Standings[] | undefined;
}

export const Cleague: FC<CleagueProps> = React.memo(({ data }) => {
  const { isLoading } = useAppSelector((state) => state.competitions);
  const { lightTableCell } = styles;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box sx={{ margin: "40px 0 40px 0" }}>
      {data?.map((groups, index) => (
        <TableContainer key={index}>
          <Table>
            <TableHead sx={{ backgroundColor: "#202020" }}>
              <TableRow>
                <TableCell sx={lightTableCell}>#</TableCell>
                <TableCell sx={lightTableCell}>{groups?.group}</TableCell>
                <TableCell sx={lightTableCell}>Тур</TableCell>
                <TableCell sx={lightTableCell}>В</TableCell>
                <TableCell sx={lightTableCell}>Н</TableCell>
                <TableCell sx={lightTableCell}>П</TableCell>
                <TableCell sx={lightTableCell}>ЗГ</TableCell>
                <TableCell sx={lightTableCell}>ПГ</TableCell>
                <TableCell sx={lightTableCell}>РМ</TableCell>
                <TableCell sx={lightTableCell}>О</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groups?.table?.map((team: TeamTable, index: number) => (
                <CLeagueTableRow team={team} index={index} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  );
});
