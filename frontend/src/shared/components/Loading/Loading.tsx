import './Loading.scss';

type LoadingProps = {
  type: 'page' | 'compact' | 'big' | 'wide';
};

const LoadingMsg = () => <div className="loading">Loading...</div>;

const Loading = ({ type }: LoadingProps) => {
  switch (type) {
    case 'compact':
      return (
        <div className="small_gamecard_container">
          <LoadingMsg />
        </div>
      );
    case 'big':
      return (
        <div className="gamecard_container">
          <LoadingMsg />
        </div>
      );
    case 'wide':
      return (
        <div className="wide_gamecard_container">
          <LoadingMsg />
        </div>
      );
  }
};

export default Loading;
