import Run from "./components/Run";
import JumpRope from "./components/JumpRope";
import Weights from "./components/Weights";
import Swimming from "./components/Swimming";
function App() {
  return (
    <div>
      <h1>Exercise Tracker</h1>
      <Run />
      <JumpRope />
      <Weights />
      <Swimming />
    </div>
  );
}

export default App;
