import './App.css';
import ColorItem from './components/ColorItem';

function App() {
  const colors = ['#518cef', '#3b10c4', '#9aede6', '#8ee763', '#a30dd0'];
  return (
    <div>
      {colors.map((item, index) => (
        <ColorItem key={index} color={item} />
      ))}
    </div>
  );
}

export default App;


