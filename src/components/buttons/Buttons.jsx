import "./buttons.scss"

const Button = ({text, className, type, onClick, disabled}, href) => {

  return (
      <button
          type={type}
          className={className}
          onClick={onClick}
          disabled={disabled}
          href={href}
      >
        {text}
      </button>
  );
};

export default Button

