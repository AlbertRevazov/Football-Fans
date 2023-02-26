import { Box, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styles } from "../../styles";
import { Standings } from "../../../../types";
import Typography from "@mui/material/Typography";
import Link from "next/link";
interface CompetitionTableProps {
  data: Standings[] | undefined;
}

export const CompetitionTable: React.FC<CompetitionTableProps> = ({ data }) => {
  const total = data?.filter((el) => el.type === "TOTAL");

  return (
    <>
      {!total ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "140px",
          }}
        >
          <Typography sx={styles.error}>Ничего не найдено</Typography>
        </Box>
      ) : (
        <Box sx={{ margin: "40px 0 40px 0" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#202020" }}>
                <TableRow>
                  <TableCell sx={styles.lightTableCell}>#</TableCell>
                  <TableCell sx={styles.lightTableCell}>Команда</TableCell>
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
                {total?.map((stand: Standings) =>
                  stand.table.map((row) => (
                    <TableRow key={row.position}>
                      <TableCell sx={styles.darkTableCell}>
                        {row.position}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        <img
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "5px",
                          }}
                          src={row.team.crest}
                        />
                        <Link
                          style={{ textDecoration: "none", color: "#202020" }}
                          href={{
                            pathname: "/teams/[slug]",
                            query: { slug: `${row.team.id}` },
                          }}
                        >
                          {row.team.name}
                        </Link>
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.playedGames}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>{row.won}</TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.draw}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.lost}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.goalsFor}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.goalsAgainst}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.goalDifference}
                      </TableCell>
                      <TableCell sx={styles.darkTableCell}>
                        {row.points}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};
