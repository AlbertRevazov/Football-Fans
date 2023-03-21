import { TableRow } from "@mui/material";
import React, { FC } from "react";
import TableCell from "@mui/material/TableCell";
import { styles } from "../../../styles";
import Link from "next/link";
import { Table } from "../../../types";

export const CLeagueTableRow: FC<{ team: Table }> = React.memo(({ team }) => {
  const { darkTableCell, img, nextLink, teamName } = styles;
  return (
    <TableRow key={team.position} sx={{}}>
      <TableCell
        sx={[
          darkTableCell,
          {
            background: "floralwhite",
            width: "10px",
          },
        ]}
      >
        {team.position}
      </TableCell>
      <TableCell sx={teamName}>
        <img style={img} src={team.team.crest} />
        <Link
          style={nextLink}
          href={{
            pathname: "/teams/[slug]",
            query: { slug: `${team.team.id}` },
          }}
        >
          {team.team.name}
        </Link>
      </TableCell>
      <TableCell sx={darkTableCell}>{team.playedGames}</TableCell>
      <TableCell sx={darkTableCell}>{team.won}</TableCell>
      <TableCell sx={darkTableCell}>{team.draw}</TableCell>
      <TableCell sx={darkTableCell}>{team.lost}</TableCell>
      <TableCell sx={darkTableCell}>{team.goalsFor}</TableCell>
      <TableCell sx={darkTableCell}>{team.goalsAgainst}</TableCell>
      <TableCell sx={darkTableCell}>{team.goalDifference}</TableCell>
      <TableCell sx={darkTableCell}>{team.points}</TableCell>
    </TableRow>
  );
});
