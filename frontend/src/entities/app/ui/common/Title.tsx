type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="wide_gamecard_title" title={text} style={{ textAlign: 'left', fontWeight: 700 }}>
      {text}
    </h2>
  );
};

export default Title;
