import { useTheme } from "../../contexts/ThemeContext";
import {
	LogoText,
	ThemeButton,
	ThemeImg,
	TodoBackground,
	Wrapper,
	TodoRecordWrapper,
} from "./styled";
import TodoInput from "./TodoInput";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import { Row } from "../../style";
import { useEffect, useRef, useState } from "react";
import TodoOptions from "./TodoOptions";

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
	const [remain, setRemain] = useState(0);
	const records = useRef<HTMLDivElement[]>([]);
	const [option, setOption] = useState("all");

	const addTodo = (todo: ITodo) => {
		setTodoList((todoList) => [...todoList, todo]);
	};
	const deleteTodo = (idx: number) => {
		return () =>
			setTodoList((todoList) =>
				todoList.slice(0, idx).concat(todoList.slice(idx + 1))
			);
	};
	const deleteCompleted = () => {
		for (let i = records.current.length - 1; i >= 0; i--) {
			// @ts-ignore
			if (records.current[i]?.checked == true) deleteTodo(i)();
		}
		console.log(records);
	};
	return (
		<Wrapper tw="flex flex-col gap-6">
			<Row tw="justify-between">
				<LogoText>TODO</LogoText>
				<ThemeButton onClick={toggleDark}>
					<ThemeImg src={dark ? iconSun : iconMoon} alt="" />
				</ThemeButton>
			</Row>
			<TodoInput addTodo={addTodo} checked={false} value="" />
			<TodoRecordWrapper $dark={dark}>
				{todoList.map((x, i) => (
					<TodoInput
						ref={(el: HTMLDivElement) => (records.current[i] = el)}
						key={x.value}
						{...x}
						isRecord={true}
						delete={deleteTodo(i)}
						setRemain={setRemain}
						remain={remain}
						option={option}
					/>
				))}
				<TodoBackground $dark={dark} className="flex justify-between items-center">
					<p>{remain} items left</p>
					<div className="hidden lg:block">
						<TodoOptions name="todoOptionDesktop" setOption={setOption}/>
					</div>
					<button onClick={deleteCompleted}>Clear Completed</button>
				</TodoBackground>
			</TodoRecordWrapper>
			<div className="lg:hidden">
				<TodoOptions name="todoOptionMobile" setOption={setOption} />
			</div>
		</Wrapper>
	);
};

export default Todo;
