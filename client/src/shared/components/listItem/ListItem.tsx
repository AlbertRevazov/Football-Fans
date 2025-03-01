import { IPerson, PMatches } from '@/types/PersonsTypes';
import { DateFormate } from '@/utils/Date';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './list-item.module.scss';

interface IFullName {
  first: string;
  last: string;
}

interface ITeam {
  id: number;
  name: string;
}

interface IListItemData {
  fullName: IFullName;
  team: ITeam;
  birth: string;
  nationality: string;
  position: string;
  contract: string;
  cn: string;
  playedMatches: PMatches[] | null;
  shirtNumber: number;
}

interface IListItemProps {
  data: IListItemData;
  type: string;
  className?: string;
}

interface IListItemReturn {
  [key: string]: React.JSX.Element | null;
}

const ListItem: FC<IListItemProps> = ({ type, data, className = styles.li }) => {
  const components: IListItemReturn = {
    fullName:
      data.fullName?.first && data.fullName?.last ? (
        <li className={className}>
          Full Name
          <span>
            {data.fullName.first} {data.fullName.last}
          </span>
        </li>
      ) : null,

    birthday: data.birth ? (
      <li className={className}>
        Birth <span>{data.birth}</span>
      </li>
    ) : null,

    country: data.nationality ? (
      <li className={className}>
        Nationality <span>{data.nationality}</span>
      </li>
    ) : null,

    position: data.position ? (
      <li className={className}>
        Position <span>{data.position}</span>
      </li>
    ) : null,

    shirtNumber: data.shirtNumber ? (
      <li className={className}>
        Shirt Number <span>{data.shirtNumber}</span>
      </li>
    ) : null,

    club:
      data.team?.id && data.team?.name ? (
        <li className={className}>
          Team
          <Link className={data.cn} href={`/teams/${data.team.id}`}>
            {data.team.name}
          </Link>
        </li>
      ) : null,

    contract: data.contract ? (
      <li className={className}>
        Contract until <span>{data.contract}</span>
      </li>
    ) : null,

    matchesPlayed: data.playedMatches ? (
      <li className={className}>
        Matches played <span>{data.playedMatches.length}</span>
      </li>
    ) : null,
  };

  return components[type] || null;
};

export default React.memo(ListItem);
