type InfoProps = {
  type: 'compact' | 'big' | 'wide';
  children: React.ReactNode;
};

const Info = ({ type, children }: InfoProps) => {
  switch (type) {
    case 'compact':
      return <div className="small_gamecard_content">{children}</div>;
    case 'wide':
      return <div className="wide_gamecard_info">{children}</div>;
    case 'big':
      return <div className="gamecard_details">{children}</div>;
  }
};

export default Info;
