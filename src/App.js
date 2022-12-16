import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { getUser } from './redux/ducks/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user);

  console.log(user);

  const voters = [
    "Muhammed Shafi",
    "Dheeraj",
    "Shamnad",
    "Akhil Kumar",
    "Ijas",
    "John"
  ]

  return (
    <div className="App">
        <h1 style={{ textAlign: "center" }}>Redux made easy</h1>
        <h2 style={{ textAlign: "center" }}>The votes: { count }</h2>
        {voters.map((voters) => (
          <Counter name = {voters} />
        ))}
    </div>
  );
}

export default App;
