import "./button.css"

const Button = (props) => {
  return (
    <a href={props.link} className="btn-component" download>{props.name}</a>
  )
}

export default Button