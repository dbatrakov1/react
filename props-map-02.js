import './App.css';
import data from './data'
import Card from './components/Card'

function App() {
  const cards = data.map(item => {
    return(
      <Card
        item={item}
      />
    )
  } )
  console.log(data)
  return (
    <div className="App">
      <div className='main--cards'>{cards}</div>
    </div>
  );
}

export default App;
