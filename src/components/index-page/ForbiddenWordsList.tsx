import React from 'react';
import { useSelector } from 'react-redux';
import { getForbiddenWords } from '@redux/entities/Article';

const ForbiddenWordsList: React.FC = (): JSX.Element => {
  const forbiddenWords: string[] = useSelector(getForbiddenWords);
  return (
    <>
      {!forbiddenWords && 'Fetching forbidden words...'}
      {forbiddenWords &&
        forbiddenWords.map(
          (word: string, index: number): JSX.Element => {
            const isLast: boolean = forbiddenWords.length - 1 === index;
            return (
              <span key={word}>
                {word}
                {isLast ? '' : ', '}
              </span>
            );
          }
        )}
    </>
  );
};

export default ForbiddenWordsList;
