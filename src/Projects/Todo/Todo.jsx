import { useState } from "react";
import "./Todo.css";
import TodoDate from "./TodoDate";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";

export default function Todo() {
  const [task, setTask] = useState(()=>getLocalStorageData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;
    // if(task.includes(inputValue)) return;
    // setTask((prevTask)=> [...prevTask, inputValue]);

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]); //ES 6 feature if key and value are same no need to pass key:value ex: "id:id" just pass "id"
  };

  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleCheckedTodo = (curEle) =>{
    const updatedTask = task.map((curTask)=>{
        if(curTask.content == curEle){
            return {...curTask, checked: !curTask.checked};
        }
        else{
            return curTask;
        }
    });
    setTask(updatedTask);
  }

  setLocalStorageData(task)

  const handleTodoClear = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoDate />
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleTodoClear}>
          Clear all
        </button>
      </section>
    </section>
  );
}
