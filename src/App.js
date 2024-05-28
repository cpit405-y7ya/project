import { Toaster } from 'react-hot-toast';
import './App.css';
import Events from './components/Events';
import Search from './components/Search';
import { AuthButton } from './components/AuthButton';


function App() {
  return (
    <div className="App">
      <AuthButton/>
      <Search/>
      <Events />

      <Toaster />
    </div>
  );
}

export default App;
