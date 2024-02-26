import './ErrorHandler.scss';

type ErrorHandlerProps = {
  type: 'wide' | 'compact' | 'big';
  error: Error;
};

// Probably not the optimal way to handle errors, but it works for now
const ErrorMsg = () => <div className="error">Something went wrong. Please try again later.</div>;

/**
 * Handler for errors in the gamecard components
 * @param type - 'wide' | 'compact' | 'big'
 * @returns Error message wrapped into div
 */
const ErrorHandler = ({ type, error }: ErrorHandlerProps) => {
  console.error(error);
  switch (type) {
    case 'wide':
      return (
        <div className="wide_gamecard_container">
          <ErrorMsg />
        </div>
      );
    case 'compact':
      return (
        <div className="small_gamecard_container">
          <ErrorMsg />
        </div>
      );
    case 'big':
      return (
        <div className="gamecard_container">
          <ErrorMsg />
        </div>
      );
  }
};

export default ErrorHandler;
