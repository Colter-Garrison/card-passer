import React from 'react';
import Card from './Card';
import { useCardContext } from './ContextProvider';

export default function ExecutePassButton() {
  const { passCard, from, to, selectedCard } = useCardContext();
  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
