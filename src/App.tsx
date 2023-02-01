import Todo from "./components/Todo/Todo";
import { useTheme } from "./contexts/ThemeContext";
function App() {
	const { dark } = useTheme();
	return (
		<div className="font-sans text-lg justify-center items-center">
			<div
				className={`flex justify-center top-0 left-0 absolute w-screen min-h-screen -z-10 after:bg-no-repeat after:bg-cover after:content-[''] after:absolute after:w-screen after:h-2/5 after:top-0 after:left-0 after:-z-10 ${
					dark
						? "bg-Dark_Very_Dark_Blue after:bg-[url('/src/assets/images/bg-mobile-dark.jpg')] lg:after:bg-[url('/src/assets/images/bg-desktop-dark.jpg')]"
						: "bg-Light_Very_Light_Gray after:bg-[url('/src/assets/images/bg-mobile-light.jpg')] lg:after:bg-[url('/src/assets/images/bg-desktop-light.jpg')]"
				}`}
			>
				<Todo />
			</div>
		</div>
	);
}

export default App;
