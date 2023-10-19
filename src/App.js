import './App.css';
import Toggle from './component/state/Toggle';
import Game from './component/tictactoe/Game';
import YoutubeList from './component/Youtube/YoutubeList';
// import Button from './component/Button/Button';
// import Card from './component/Card/Card';
import CardItem from './component/Card/CardItem';

function App() {
  const name = "evondev";
  return (
    <>
      {/* <YoutubeList>
        {name}
      </YoutubeList> */}
      {/* <Toggle /> */}
      {/* <Game/> */}
     {/* <Button className="btn-pink">Click me!!</Button> */}
     {/* <Card /> */}
     <CardItem/>
    </>
  );
}

export default App;
