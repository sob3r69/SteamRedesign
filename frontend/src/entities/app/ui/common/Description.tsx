type DescriptionProps = {
  text: string;
};

const Description = ({ text }: DescriptionProps) => {
  return <h5 className="gamecard_details_description">{text}</h5>;
};

export default Description;
