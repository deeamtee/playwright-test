import { useState } from 'react';
import { useCreateTodoMutation } from './api';

function App() {
  const [response, setResponse] = useState(null);
  const [createTodo] = useCreateTodoMutation();

  const handleClick = async () => {
    try {
      const data = {
        title: 'New Todo',
        completed: false,
      };

      const response = await createTodo(data).unwrap();
      setResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button id="button" onClick={handleClick}>
        Нажмите, чтобы сделать запрос
      </button>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
}

export default App;