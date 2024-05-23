import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'

function App() {
  return (
    <>
    <Navbar title="Hii"/>
    <div className='container my-5'>     {/* predefined container class , Margin Y axis class 5*/}
      <Textform heading="Enter the Text to Analyze"/>
    </div>
  </>
  );
}

export default App;
