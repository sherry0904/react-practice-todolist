import './App.css';
import { useSelector} from 'react-redux';

import TaskList from './component/TaskList';
import Form from './component/Form';


function App() {

  const todoList = useSelector(state => state.todoList);

  return (
    <div className="App">
      <h2>To DO List</h2>
      <p style={{textAlign: "left", width: "100%", fontSize: "13px"}}>待辦件數: {todoList.length}</p>
      <Form/>
      <TaskList todoList={todoList}/>
    </div>
  );
}

export default App;
