const Button = ({ children, type, isDisabled, version }) => {
  return (
    <div type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </div>
  );
};

export default Button;
