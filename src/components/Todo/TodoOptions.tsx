import { Dispatch, FormEvent, SetStateAction } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { TodoBackground } from "./styled";
import TodoOption,{ ITodoOptionProp } from "./TodoOption";
import { css, theme} from "twin.macro";

interface ITodoOptionsProp {
    name: string
    setOption: Dispatch<SetStateAction<string>>
    
}

const TodoOptions = ( props: ITodoOptionsProp ) => {
    const {dark} = useTheme()
    const handleOnChange = (e:FormEvent<HTMLDivElement>) => {
        const temp = e.target as HTMLInputElement
        console.log(temp.value)
        props.setOption(temp.value)
        
    }
const options:ITodoOptionProp[] = [
    {
        id: "all",
        value: "all",
        name: props.name,
        content: "All",
        defaultChecked: true
    },
    {
        id: "active",
        value: "active",
        name: props.name,
        content: "Active",
    },
    {
        id: "completed",
        value: "completed",
        name: props.name,
        content: "Completed",
    }
]
	return (
		<TodoBackground $dark={dark} className="flex justify-center gap-4" onChange={handleOnChange} css={[`input[type=radio]:checked+label{ color: ${theme`colors.Bright_Blue`} }`]}>
            {options.map((x,i)=><TodoOption key={x.id} {...x}/>)}
		</TodoBackground>
	);
};

export default TodoOptions;
