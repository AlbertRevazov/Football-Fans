import { Scorers } from '@/types/CompetitionsTypes';
import { IGames } from '../../../types/GamesTypes';
import CompetitionGroup from '../group';
import CompetitionLeague from '../league';
import CompetitionScorers from '@/components/competitions/scorers';
import Calendar from '@/components/ui/Calendar/Calendar';

type BlockType = 'table' | 'scorers' | 'calendar';

interface RenderBlockContentProps {
  activeBlock: BlockType;
  scorers: Scorers[] | null;
  matches: IGames[] | null;
  competitionData: any;
}

export const renderBlockContent = ({
  activeBlock,
  scorers,
  matches,
  competitionData,
}: RenderBlockContentProps) => {
  switch (activeBlock) {
    case 'scorers':
      return !!scorers?.length && <CompetitionScorers data={scorers} />;
    case 'table':
      return (
        <>
          {competitionData?.table && <CompetitionLeague data={competitionData.table} />}
          {competitionData?.group && <CompetitionGroup data={competitionData.group} />}
        </>
      );
    case 'calendar':
      return matches && <Calendar data={matches} />;
    default:
      return null;
  }
};
