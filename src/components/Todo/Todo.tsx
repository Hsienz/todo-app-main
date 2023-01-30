import { useTheme } from "../../contexts/ThemeContext";
import {
	LogoText,
	ThemeButton,
	ThemeImg,
	TodoBackground,
	Wrapper,
	Circle,
	TodoRecordWrapper,
} from "./styled";
import TodoInput from "./TodoInput";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import { Row } from "../../style";
import { useEffect, useState } from "react";

export interface ITodo {
	value: string;
	checked: boolean;
}

const items: ITodo[] = [
	{
		value: "Complete online JavaScript course",
		checked: true,
	},
	{
		value: "Jog around the park 3x",
		checked: false,
	},
	{
		value: "10 minutes meditation",
		checked: false,
	},
	{
		value: "Read for 1 hour",
		checked: false,
	},
	{
		value: "Pick up groceries",
		checked: false,
	},
	{
		value: "Complete Todo App on Frontend Mentor",
		checked: false,
	},
];

const Todo = () => {
	const { dark, toggleDark } = useTheme();
	const [todoList, setTodoList] = useState<ITodo[]>(items);
	const [remain, setRemain] = useState(0)
	
	const addTodo = (todo: ITodo) => {
		setTodoList((todoList) => [...todoList, todo]);
	};
	const deleteTodo = (idx:number) => {
		return () => setTodoList( todoList => todoList.slice(0,idx).concat(todoList.slice(idx+1)))
	}
	return (
		<Wrapper tw="flex flex-col gap-6" >
			<Row tw="justify-between">
				<LogoText>TODO</LogoText>
				<ThemeButton onClick={toggleDark}>
					<ThemeImg src={dark ? iconSun : iconMoon} alt="" />
				</ThemeButton>
			</Row>
			<TodoInput addTodo={addTodo} checked={false} value="" />
			<TodoRecordWrapper $dark={dark}>
				{todoList.map((x, i) => (
					<TodoInput key={x.value} {...x} isRecord={true} delete={deleteTodo(i)} setRemain={setRemain} remain={remain} />
				))}
				<TodoBackground $dark={dark} className="flex justify-between">
					<p>{remain} items left</p>
					<button>Clear Completed</button>
				</TodoBackground>
			</TodoRecordWrapper>
			<TodoBackground $dark={dark} className="flex justify-center gap-4">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</TodoBackground>
		</Wrapper>
	);
};

export default Todo;
