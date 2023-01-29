import { Row } from "../../style"
import { Circle } from "./styled"
import iconCross from '../../assets/images/icon-cross.svg'
import { useState } from "react"

interface ITodoRecord {
    content: string
}

const TodoRecord = (props:ITodoRecord) => {
    const [checked, setChecked] = useState(false)
    return (
        <Row>
            <Circle />
            <p>{props.content}</p>
            <img src={iconCross} alt="" />
        </Row>
    )
}

export default TodoRecord