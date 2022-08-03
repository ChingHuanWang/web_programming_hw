import "./Button.css";


export default function Button(props){
	return(
		<button className={props.className} onClick={props.addOp}>
			{props.btn}
		</button>
	)
}