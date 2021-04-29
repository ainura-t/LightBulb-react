const Button = (props) => {
  console.log(props.click);
  return (
    <div>
      <button onClick={props.click}>{props.text}</button>
    </div>
  );
};

export default Button;
