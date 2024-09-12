import "./buttons.scss"

const Button = ({text, className, type, onClick}) => {

  return (
    <button type={type} 
    className="button"onClick={onClick}>{text}</button>
    
  );
};

export default Button


