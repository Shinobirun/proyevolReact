import logo from './logo.svg';
import './App.css';

import TaskListComponent from './componets/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* componente de listadod e tareas */}
        <TaskListComponent></TaskListComponent>

      </header>
    </div>
  );
}

export default App;
