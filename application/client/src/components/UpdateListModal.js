import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../assets/styles/modules/modal.module.scss'
import Button from './Button';

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

function UpdateListModal({ type, modalOpen, setModalOpen, todo, prevTitle }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, modalOpen]);

  const handleSubmit = (e) => {
    // alert("the prevTitle is: " + prevTitle)
    // alert("The title is: " + title)
    // e.preventDefault();
    if (title === '') {
      alert("TITLE IS EMPTY!")
      toast.error('Please enter a title');
      return;
    } else {
      alert("TITLE IS VALID!")
      prevTitle = title;
      // dispatch(prevTitle = title);
      toast.success('Task added successfully');
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
                Update List Title
              </h1>
              <label htmlFor="title">
                New List Title
                <input
                  type="text"
                  id="NewListTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <div className={styles.buttonContainer}>
                <Button id="ApplyNewListTitle" type="submit" variant="primary">
                  Update
                </Button>
                <Button id="CancelNewListTitle" variant="cancel" onClick={() => setModalOpen(false)}>
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

export default UpdateListModal;
