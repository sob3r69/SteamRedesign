import React from 'react';

type BuyContainerProps = {
  children: React.ReactNode;
};

const BuyContainer = ({ children }: BuyContainerProps) => {
  return <div className="gamecard_details_interactions_price">{children}</div>;
};

export default BuyContainer;
