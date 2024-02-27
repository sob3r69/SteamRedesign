type InteractionsProps = {
  children: React.ReactNode;
};

const Interactions = ({ children }: InteractionsProps) => {
  return <div className="gamecard_details_interactions">{children}</div>;
};

export default Interactions;
