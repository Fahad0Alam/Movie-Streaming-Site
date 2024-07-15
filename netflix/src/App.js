import Body from "./components/Body";
import { Toaster } from 'react-hot-toast';
import MovieDialogue from "./components/MovieDialogue";
function App() {
  return (
    <div>
      <Body />
      <Toaster/>
      <MovieDialogue/>
    </div>
  );
}

export default App;
