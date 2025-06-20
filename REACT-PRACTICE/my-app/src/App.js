import './App.css';
import { Provider } from 'react-redux';
import state from './store/store';
import DisplayComp from './DisplayComp';
import MainComp from './MainComp';

function App() {
  return (
    <Provider store={state}>
      <div >
        <DisplayComp />
        <MainComp />
      </div>
    </Provider>
  );
}

export default App;
