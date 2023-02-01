import { useTheme } from "../../contexts/ThemeContext"

export interface ITodoOptionProp {
    id: string,
    name: string,
    value: string,
    content: string,
    defaultChecked?: boolean
}
const TodoOption = (props:ITodoOptionProp) => {
    const {dark} = useTheme()
    return (
        <div className={`font-bold duration-300 ${dark ? "text-Dark_Dark_Grayish_Blue hover:text-Dark_Light_Grayish_Blue_hover" : "text-Dark_Light_Grayish_Blue hover:text-Light_Very_Dark_Grayish_Blue" }`}>
			<input className="appearance-none" type="radio" id={props.id} value={props.value} name={props.name} defaultChecked={props.defaultChecked}/>
            <label className="cursor-pointer checked:!text-Bright_Blue" htmlFor={props.id}>{props.content}</label>
        </div>
    )
}

export default TodoOption