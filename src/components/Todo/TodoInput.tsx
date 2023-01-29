import { TodoInputWrapper } from "./styled";
import { useTheme } from "../../contexts/ThemeContext";
import { KeyboardEvent, useState } from "react";
import { ITodo } from "./Todo";
interface ITodoInputProp {
	addTodo: (x: ITodo) => void;
}

const TodoInput = (props: ITodoInputProp) => {
	const { dark } = useTheme();
	const [value, setValue] = useState("");
	const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key == "Enter") {
			props.addTodo({ content: value });
			setValue("");
		}
	};
	return (
		<TodoInputWrapper
			$dark={dark}
			onChange={(e) => setValue(e.target.value)}
			value={value}
			onKeyDown={(e) => handleOnKeyDown(e)}
			placeholder="Create a new todo..."
		/>
	);
};

export default TodoInput;
