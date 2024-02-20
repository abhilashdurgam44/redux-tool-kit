import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, remove } from './Store/counterSlice';

function App() {
  // Use useSelector to select the counter state from the Redux store
  const count = useSelector((state) => state.counter);

  const dispatch=useDispatch();

  return (
    <>
      <h1>This website: {count}</h1>
      <button onClick={()=>dispatch(add())}>add</button>
      <button onClick={()=>dispatch(remove())}>remove</button>
    </>
  );
}

export default App;
