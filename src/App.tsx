import { Background, Wrapper } from "./style";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { useTheme } from "./contexts/ThemeContext";
function App() {
	const {dark} = useTheme()
	return (
		<Wrapper>
			<Background $dark={dark}/>
			<Header />
			<Todo />
		</Wrapper>
	);
}

export default App;
