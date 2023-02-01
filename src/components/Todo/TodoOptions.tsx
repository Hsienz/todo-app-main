import { Dispatch, FormEvent, SetStateAction } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import TodoOption,{ ITodoOptionProp } from "./TodoOption";
import { css } from "@emotion/react";
interface ITodoOptionsProp {
    name: string
    setOption: Dispatch<SetStateAction<string>>
    option: string
}

const TodoOptions = ( props: ITodoOptionsProp ) => {
    const {dark} = useTheme()
    const handleOnChange = (e:FormEvent<HTMLDivElement>) => {
        const temp = e.target as HTMLInputElement
        console.log(temp.value)
        props.setOption(temp.value)
        
    }
const options = [
    {
        id: "all",
        value: "all",
        content: "All",
        defaultChecked: true
    },
    {
        id: "active",
        value: "active",
        content: "Active",
    },
    {
        id: "completed",
        value: "completed",
        content: "Completed",
    }
]
	return (
		<div className={`flex justify-center gap-4 rounded-lg py-3 ${dark ? "bg-Dark_Very_Dark_Desaturated_Blue text-Dark_Light_Grayish_Blue" : "bg-Light_Very_Light_Gray text-Light_Very_Dark_Grayish_Blue"}`} css={css`label[for=${props.option}]{color:rgb(58,123,253)}`} onChange={handleOnChange} >
            {options.map((x,i)=><TodoOption key={x.id} name={props.name} {...x}/>)}
		</div>
	);
};

export default TodoOptions;
