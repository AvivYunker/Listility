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

function TodoModal({ type, modalOpen, setModalOpen, listId, prevTitle }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  let taskId = useState();

  const {
    editListTitle
  } = useAppContext()

  const handleSubmit = (e) => {
    // alert("TITLE UPDATER IS HERE!")
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      // alert("The title is empty...")
      return;
    }
    if (title) {
      // alert("THe new title is: " + title)
      editListTitle(listId, title)
      setModalOpen(false);
    }
    // clearAlert()
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
                Change List Title
              </h1>
              <label htmlFor="title">
                New Title
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
                  Change
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
