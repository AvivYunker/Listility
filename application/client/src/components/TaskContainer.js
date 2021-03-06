import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../assets/styles/modules/app.module.scss'


import TodoItem from './TodoItem';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TaskContainer({tasks, listId}) {
  // const todoList = useSelector((state) => state.todo.todoList);
  const todoList = tasks
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    // tasks.map((task) => {
    //   console.log("##Title ID is: " + task._id)
    //   console.log("##Title is: " + task.taskTitle)
    //   console.log("##IsChecked: " + task.isChecked)
    // })
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            // <motion.div key={todo.id} variants={child}>
            <TodoItem key={todo._id} todo={todo} listId={listId}/>
            // </motion.div>
          ))
          // tasks.map((task) => {
          //   console.log("##Title ID is: " + task._id)
          //   console.log("##Title is: " + task.taskTitle)
          //   console.log("##IsChecked: " + task.isChecked)
          // })
        ) : (
          <motion.p id="NoTasksFound" variants={child} className={styles.emptyText}>
            Click on "Add Task" to add a new task
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default TaskContainer;
