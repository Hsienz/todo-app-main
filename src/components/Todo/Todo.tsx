import { useTheme } from "../../contexts/ThemeContext";
import TodoInput from "./TodoInput";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
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
	};
	return (
		<div className="flex flex-col gap-6 max-w-[724px] w-full m-6">
			<div className="flex justify-between">
				<h1 className="text-3xl tracking-[0.8rem] font-bold text-Light_Very_Light_Gray">TODO</h1>
				<button className="aspect-square h-7" onClick={toggleDark}>
					<img className="h-full w-full" src={dark ? iconSun : iconMoon} alt="" />
				</button>
			</div>
			<TodoInput addTodo={addTodo} checked={false} value="" />
			<div className={`shadow-2xl rounded-lg py-3 flex flex-col ${dark ? "text-Dark_Very_Dark_Grayish_Blue bg-Dark_Very_Dark_Desaturated_Blue" : "text-Light_Very_Dark_Grayish_Blue bg-Light_Very_Light_Gray"}`}>
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
				<div className={`flex justify-between items-center rounded-lg px-4 gap-4 py-3 ${dark ? "text-Dark_Very_Dark_Grayish_Blue": "text-Light_Dark_Grayish_Blue" }`}>
					<p>{remain} items left</p>
					<div className="hidden lg:block">
						<TodoOptions option={option} name="todoOptionDesktop" setOption={setOption}/>
					</div>
					<button onClick={deleteCompleted}>Clear Completed</button>
				</div>
			</div>
			<div className="lg:hidden shadow-lg">
				<TodoOptions option={option} name="todoOptionMobile" setOption={setOption} />
			</div>
		</div>
	);
};

export default Todo;
