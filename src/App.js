import { Home } from './Pages/Home/Home'
import { SearchAppBar } from './components/SearchAppBar/SearchAppBar'
import { firebaseConfig } from './services';

firebaseConfig();
function App() {
  return (
    <>
      <SearchAppBar />
      <div style={{ margin: '3rem' }}>
        <Home />
      </div>
    </>
  );
}

export default App;
