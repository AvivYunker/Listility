import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../assets/styles/modules/modal.module.scss'
import Button from './Button';
import { useAppContext } from '../context/appContext'


const dropIn = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
};

function TodoModal({ type, modalOpen, setModalOpen, todo, listId }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isChecked, setIsChecked] = useState('');
  // let isChecked;
  // const [isChecked, setIsChecked] = useState('incomplete');
  let taskId = useState();

  const {
    createTask,
    updateTask,
    deleteTask,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title) {
      // alert("The title is: " + title);
      // alert("The status is: " + isChecked);
      if (type === 'add') {
        // alert("New task has been created###")
        // alert("The listId outside of AppContext (now 'add') is: " + listId)
        dispatch(createTask(listId, title, isChecked));
        // alert("FINISHED...")
        toast.success('Task added successfully');
      }
      if (type === 'update') {
        // alert("The list-id is...: " + listId)
        if (todo.taskTitle) {
          // alert("The todo-id is: " + todo._id);
          // alert("New task has been updated&&&")
          // alert("The listId outside of AppContext (not 'update') is: " + listId)
          dispatch(updateTask(listId, todo._id, title, isChecked));
          toast.success('Task Updated successfully'); 
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className={styles.closeButton}
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>

            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}>
                {type === 'add' ? 'Add' : 'Update'} Task
              </h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="NewTaskTitle"
                  value={title}
                  // value={todo.taskTitle}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <div className={styles.buttonContainer}>
                <Button id="NewTaskSubmit" type="submit" variant="primary">
                  {type === 'add' ? 'Add' : 'Update'}
                </Button>
                <Button variant="cancel" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
