import { useState } from 'react';
import { Box, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <Button onClick={handleAddTodo} mt={2} colorScheme="blue">Add Task</Button>
      <List spacing={3} mt={4}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {todo}
            </Box>
            <Button onClick={() => handleRemoveTodo(index)} colorScheme="red">Remove</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoApp;