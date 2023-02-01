import { useTheme } from "../../contexts/ThemeContext";
import React, { useImperativeHandle } from "react";
import {
	ChangeEvent,
	KeyboardEvent,
	useEffect,
	Dispatch,
	useState,
	SetStateAction,
} from "react";
import { ITodo } from "./Todo";
import TextareaAutosize from "react-textarea-autosize";
import iconCross from "../../assets/images/icon-cross.svg";
import iconCheck from "../../assets/images/icon-check.svg";

interface ITodoInputProp {
	value: string;
	addTodo?: (x: ITodo) => void;
	isRecord?: boolean;
	checked: boolean;
	delete?: () => void;
	remain?: number;
	setRemain?: Dispatch<SetStateAction<number>>;
	option?:string
}

const TodoInput = React.forwardRef((props: ITodoInputProp, ref) => {
	const { dark } = useTheme();
	const [value, setValue] = useState(props.value);
	const [checked, setChecked] = useState(props.checked);
	const handleOnKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key == "Enter") {
			e.preventDefault();
			if (!props.isRecord && props.addTodo) {
				props.addTodo({ value, checked });
				setValue("");
				setChecked(false);
			} else {
			}
		}
	};
	const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue((value) => e.target.value);
	};
	const handleCheck = () => {
		if (props.setRemain) props.setRemain((x) => x + (checked ? 1 : -1));
		setChecked((x) => !x);
	};
	const handleDelete = () => {
		if (props.setRemain && !checked) {
			props.setRemain((x) => x - 1);
		}
		if (props.delete) props.delete();
	};
	useEffect(() => {
		if (props.setRemain && !checked) {
			props.setRemain((x) => x + 1);
		}
	}, []);
	useImperativeHandle(ref,()=>({
		checked
	}))
	return (
		<div className={`flex items-center rounded-lg px-6 gap-4 py-3 ${dark ? "bg-Dark_Very_Dark_Desaturated_Blue text-Dark_Light_Grayish_Blue" : "bg-Light_Very_Light_Gray text-Light_Very_Dark_Grayish_Blue"} ${props.option == "active" && checked || props.option=="completed" && !checked ? "!hidden" : "" }`}>
			<button
				onClick={handleCheck}
				className={`h-7 aspect-square border-[1px] rounded-full ${
					checked
						? "from-Cyan to-Pink bg-gradient-to-br border-none"
						: ""
				} ${dark ? "border-Dark_Very_Dark_Grayish_Blue" : "border-Light_Very_Light_Grayish_Blue"}`	
			}
			>
				{checked && <img className="h-3 m-auto" src={iconCheck} alt="" />}
			</button>
			<TextareaAutosize
				className={`
				w-full bg-transparent outline-none resize-none py-3
				${
					checked
						? `line-through ${
								dark
									? "text-Dark_Dark_Grayish_Blue"
									: "text-Light_Very_Light_Grayish_Blue"
						}`
						: ""
				}`}
				onChange={handleOnChange}
				value={value}
				onKeyDown={handleOnKeyDown}
				placeholder="Create a new todo..."
				disabled={props.isRecord}
			/>
			{props.isRecord && (
				<button onClick={handleDelete}>
					<img src={iconCross} alt="" />
				</button>
			)}
		</div>
	);
})

export default TodoInput;
