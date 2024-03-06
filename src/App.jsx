import { useSelector, useDispatch } from "react-redux";
import { toggleActions } from "./store/toggle";
import { nameActions } from "./store/nameSlice";
import Name from "./components/Name";

function App() {
	const dispatch = useDispatch();
	const { toggle } = useSelector((state) => state.toggleSlice);
	const { fullName } = useSelector(state => state.nameSlice)

  const toggleBtnHandler = () => dispatch(toggleActions.setToggle())

	const clearName = () => {
		dispatch(nameActions.defaultName())
	}

	return (
		<>
			<h1>hi {fullName}</h1>
      <button onClick={toggleBtnHandler}>{toggle ? "hi" : "bye"}</button>
			<button onClick={clearName}>clear name</button>
			<Name />
		</>
	);
}

export default App;
