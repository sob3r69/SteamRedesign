type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="wide_gamecard_title" title={text}>
      {text}
    </h2>
  );
};

export default Title;
