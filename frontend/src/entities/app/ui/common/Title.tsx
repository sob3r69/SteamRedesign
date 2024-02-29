type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <h2>{text}</h2>;
};

export default Title;