type DescriptionProps = {
  text: string;
};

const Description = ({ text }: DescriptionProps) => {
  return (
    <h5 className="gamecard_details_description" style={{ textAlign: 'left' }}>
      {text}
    </h5>
  );
};

export default Description;
