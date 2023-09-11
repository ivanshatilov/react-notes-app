import MainPage from './components/MainPage';
import AddNoteForm from './components/AddNoteInput';
import NotesBody from './components/NotesBody';

function App() {
  return (
        <MainPage>
          <AddNoteForm />
              <NotesBody />
        </MainPage>
  );
}

export default App;
