import './App.css';
import Appointments from './components/Appointments/Appointments';
import Body from './components/Body/Body';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className='p-5 bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-200 font-sans font-semibold font text-lg' >
      <NavBar />
      <Body />
      <Appointments />
    </div>
  );
}

export default App;
