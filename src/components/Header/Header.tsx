import { useTheme } from "../../contexts/ThemeContext"
import { Wrapper } from "./style"

const Header = () => {
    const {dark} = useTheme()
    return (
        <Wrapper $dark={dark}>
        </Wrapper>
    )
}

export default Header