import type { JSX } from 'react';

import { useTranslations } from 'next-intl';

import type { CardProps } from './model/interfaces/card.interface';

import './card.scss';

function Card({ person }: CardProps): JSX.Element {
  const t = useTranslations('results');

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__name">{person.name}</h3>
      </div>
      <div className="card__body">
        <div className="card__info">
          <span className="card__label">{t('height')}:</span>
          <span className="card__value">{person.height} cm</span>
        </div>
        <div className="card__info">
          <span className="card__label">{t('mass')}:</span>
          <span className="card__value">{person.mass} kg</span>
        </div>
        <div className="card__info">
          <span className="card__label">{t('birthYear')}:</span>
          <span className="card__value">{person.birth_year}</span>
        </div>
        <div className="card__info">
          <span className="card__label">{t('gender')}:</span>
          <span className="card__value">{person.gender}</span>
        </div>
      </div>
      <div className="card__footer">
        <span className="card__badge">{t('hair')}: {person.hair_color}</span>
        <span className="card__badge">{t('eyes')}: {person.eye_color}</span>
        <span className="card__badge">{t('skin')}: {person.skin_color}</span>
      </div>
    </div>
  );
}

export default Card;