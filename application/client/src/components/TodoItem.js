import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../assets/styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';
import { useAppContext } from '../context/appContext';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo, listId }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const { deleteTask } = useAppContext();

  useEffect(() => {
          // console.log("$$$" + todo.taskTitle)
    if (todo.isChecked) {
      console.log(`Task with title ${todo.taskTitle} is checked? ${todo.isChecked}`)
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.isChecked]);

  const handleCheck = () => { // isChecked...(VERY IMPORTANT)
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, isChecked: checked ? 'false' : 'complete' })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTask(todo._id, listId));
    // dispatch(deleteTodo(todo._id));
    // toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
            id="TaskItem"
              className={getClasses([
                styles.todoText,
                todo.isChecked === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.taskTitle}
            </p>
            {/* <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p> */}
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete/>
          </div>
          <div
            id="EditTaskIcon"
            className={styles.icon}
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <MdEdit/>
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
        listId = {listId}
      />
    </>
  );
}

export default TodoItem;
