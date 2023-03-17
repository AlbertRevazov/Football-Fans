import { TableRow } from "@mui/material";
import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { styles } from "../../../styles";
import Link from "next/link";
import { TeamTable } from "../../../types";

export const CLeagueTableRow: FC<{
  team: TeamTable;
  index: number;
  key: number;
}> = React.memo(({ team, index }) => (
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
    <TableCell sx={styles.darkTableCell}>{team.playedGames}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.won}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.draw}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.lost}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.goalsFor}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.goalsAgainst}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.goalDifference}</TableCell>
    <TableCell sx={styles.darkTableCell}>{team.points}</TableCell>
  </TableRow>
));
