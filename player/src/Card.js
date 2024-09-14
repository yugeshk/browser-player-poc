import React, { useEffect } from 'react';

const Card = ({ onMount }) => {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return <div className="card">Card Content</div>;
};

export default Card;
