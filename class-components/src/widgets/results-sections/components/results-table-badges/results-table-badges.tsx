'use client';

import type { JSX } from 'react';

import { useTranslations } from 'next-intl';

import type { ResultsTableBadgesProps } from '@widgets/results-sections/model/types/results-table-badges-props.type.ts';

import './results-table-badges.scss';

function ResultsTableBadges({ person }: ResultsTableBadgesProps): JSX.Element {
  const t = useTranslations('results');

  return (
    <div className="results-table__badges">
      <span className="results-table__badge">{t('hair')}: {person.hair_color}</span>
      <span className="results-table__badge">{t('eyes')}: {person.eye_color}</span>
      <span className="results-table__badge">{t('skin')}: {person.skin_color}</span>
    </div>
  );
}

export default ResultsTableBadges;
