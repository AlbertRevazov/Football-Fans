import { Box, Table, TableRow } from "@mui/material";
import { FC } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { styles } from "../../styles";
import { Standings } from "../../../../types";
import Link from "next/link";
import { useAppSelector } from "../../../../hooks/hooks";
import Image from "next/image";

interface CompetitionTableProps {
  data: Standings[] | undefined;
}

export const Cleague: FC<CompetitionTableProps> = ({ data }) => {
  const { isLoading } = useAppSelector((state) => state.competitions);
  return (
    <>
      {!!isLoading ? (
        <Box sx={styles.loading}>
          <Image
            alt="loading"
            width={300}
            height={300}
            src="/gif/loading.gif"
          />
    
        </Box>
      ) : (
        <Box sx={{ margin: "40px 0 40px 0" }}>
          {data?.map((groups, index: number) => (
            <TableContainer>
              <Table key={index}>
                <TableHead sx={{ backgroundColor: "#202020" }}>
                  <TableRow>
                    <TableCell sx={styles.lightTableCell}>#</TableCell>
                    <TableCell sx={styles.lightTableCell}>
                      {groups?.group}
                    </TableCell>
                    <TableCell sx={styles.lightTableCell}>Тур</TableCell>
                    <TableCell sx={styles.lightTableCell}>В</TableCell>
                    <TableCell sx={styles.lightTableCell}>Н</TableCell>
                    <TableCell sx={styles.lightTableCell}>П</TableCell>
                    <TableCell sx={styles.lightTableCell}>ЗГ</TableCell>
                    <TableCell sx={styles.lightTableCell}>ПГ</TableCell>
                    <TableCell sx={styles.lightTableCell}>РМ</TableCell>
                    <TableCell sx={styles.lightTableCell}>О</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groups?.table?.map((team, index: number) => (
                    <TableRow key={team.position} sx={{}}>
                      <TableCell
                        sx={[
                          styles.darkTableCell,
                          {
                            background:
                              index < 2
                                ? "rgb(7 88 235)"
                                : index === 2
                                ? "rgb(233 68 31)"
                                : "floralwhite",
                            width: "10px",
                          },
                        ]}
                      >
                        {team.position}
                      </TableCell>
                      <TableCell sx={styles.teamName}>
                        <img style={styles.img} src={team.team.crest} />
                        <Link
                          style={styles.nextLink}
                          href={{
                            pathname: "/teams/[slug]",
                            query: { slug: `${team.team.id}` },
                          }}
                        >
                          {team.team.name}
                        </Link>
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.playedGames}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.won}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.draw}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.lost}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.goalsFor}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.goalsAgainst}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.goalDifference}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {team.points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ))}
        </Box>
      )}
    </>
  );
};
