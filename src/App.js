import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NotesArea from './components/NotesArea';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <NotesArea />
    </div>
  );
}

export default App;
