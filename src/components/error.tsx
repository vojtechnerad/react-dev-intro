type ErrorMessageProps = {
  message: string;
  onDissmiss?: () => void;
};

export const ErrorMessage = ({ message, onDissmiss }: ErrorMessageProps) => {
  return (
    <div className="error-message">
      <div className="error-content">
        <span className="error-icon">!</span>
        <span>{message}</span>
      </div>
      {onDissmiss && (
        <button className="error-dissmiss" onClick={onDissmiss}>
          Refetch
        </button>
      )}
    </div>
  );
};
