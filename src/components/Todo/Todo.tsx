import { useTheme } from "../../contexts/ThemeContext";
import {
	LogoText,
	ThemeButton,
	ThemeImg,
	TodoBackground,
	Wrapper,
	Circle,
} from "./styled";
import TodoInput from "./TodoInput";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import { Row } from "../../style";
import { useState } from "react";
import TodoRecord from "./TodoRecord";

export interface ITodo {
	content: string;
}

const Todo = () => {
	const { dark, toggleDark } = useTheme();
	const [todoList, setTodoList] = useState<ITodo[]>([]);
	const addTodo = (todo: ITodo) => {
		setTodoList((todoList) => [...todoList, todo]);
	};
	return (
		<Wrapper>
			<Row tw="justify-between">
				<LogoText>TODO</LogoText>
				<ThemeButton onClick={toggleDark}>
					<ThemeImg src={dark ? iconSun : iconMoon} alt="" />
				</ThemeButton>
			</Row>
			<TodoBackground $dark={dark} tw="flex items-center">
				<Circle />
				<TodoInput addTodo={addTodo} />
			</TodoBackground>
			<TodoBackground $dark={dark} tw="flex flex-col">
				{todoList.map((x,i)=><TodoRecord key={i} content={x.content}/>)}
			</TodoBackground>
		</Wrapper>
	);
};

export default Todo;
