export interface ITodoOptionProp {
    id: string,
    name: string,
    value: string,
    content: string,
    defaultChecked?: boolean
}
const TodoOption = (props:ITodoOptionProp) => {
    return (
        <div>
			<input className="appearance-none" type="radio" id={props.id} value={props.value} name={props.name} defaultChecked={props.defaultChecked}/>
            <label htmlFor={props.id}>{props.content}</label>
        </div>
    )
}

export default TodoOption