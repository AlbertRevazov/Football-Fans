import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styles } from "../../../styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Standings } from "../../../../../types";

interface CompetitionTableProps {
  data?: Standings[];
}

export const CompetitionTable: React.FC<CompetitionTableProps> = React.memo(
  ({ data }) => {
    const total = data?.find((el) => el.type === "TOTAL");

    const { lightTableCell, darkTableCell, img, nextLink } = styles;
    return (
      <>
        {!total ? (
          <Box sx={styles.notFound}>
            <Typography sx={styles.error}>Ничего не найдено</Typography>
          </Box>
        ) : (
          <Box sx={{ margin: "40px 0 40px 0" }}>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#202020" }}>
                  <TableRow>
                    <TableCell sx={lightTableCell}>#</TableCell>
                    <TableCell sx={lightTableCell}>Команда</TableCell>
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
                  {total.table.map((row) => (
                    <TableRow key={row.position}>
                      <TableCell sx={darkTableCell}>{row.position}</TableCell>
                      <TableCell sx={darkTableCell}>
                        <img
                          style={img}
                          src={row.team.crest}
                          alt={row.team.name}
                        />
                        <Link
                          style={nextLink}
                          href={{
                            pathname: "/teams/[slug]",
                            query: { slug: `${row.team.id}` },
                          }}
                        >
                          {row.team.name}
                        </Link>
                      </TableCell>
                      <TableCell sx={darkTableCell}>
                        {row.playedGames}
                      </TableCell>
                      <TableCell sx={darkTableCell}>{row.won}</TableCell>
                      <TableCell sx={darkTableCell}>{row.draw}</TableCell>
                      <TableCell sx={darkTableCell}>{row.lost}</TableCell>
                      <TableCell sx={darkTableCell}>{row.goalsFor}</TableCell>
                      <TableCell sx={darkTableCell}>
                        {row.goalsAgainst}
                      </TableCell>
                      <TableCell sx={darkTableCell}>
                        {row.goalDifference}
                      </TableCell>
                      <TableCell sx={darkTableCell}>{row.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </>
    );
  }
);
