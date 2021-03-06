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
  const { updateTask, deleteTask } = useAppContext();

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    todo.isChecked = !todo.isChecked
    dispatch(updateTask(listId, todo._id, todo.taskTitle, todo.isChecked))
  };

  const handleDelete = () => {
    dispatch(deleteTask(todo._id, listId));
    toast.success('Todo Deleted Successfully');
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

                todo.isChecked === true && styles['todoText--completed']
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
            // onKeyDown={() => handleDelete()}
            tabIndex={0}
            // role="button"
          >
            <MdDelete/>
          </div>
          <div
            id="EditTaskIcon"
            className={styles.icon}
            onClick={() => handleUpdate()}
            // onKeyDown={() => handleUpdate()}
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
