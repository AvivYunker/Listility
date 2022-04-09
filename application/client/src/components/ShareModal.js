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

function ShareModal({ type, modalOpen, setModalOpen, todo, listTitle }) {
  const dispatch = useDispatch();
  const [emailOfShared, setEmailOfShared] = useState('');
  const [isEdit, setIsEdit] = useState('');
  const [status, setStatus] = useState('incomplete');
  // const { Title } = useAppContext()

  useEffect(() => {
    if (type === 'update' && todo) {
      setEmailOfShared(todo.title);
      setEmailOfShared(todo.status);
    } else {
      setEmailOfShared('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleShare = () => {
    // alert("ready to share...")
    alert("the email of the user is: " + emailOfShared)
    alert("The isEdit is: " + isEdit)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailOfShared === '') {
      toast.error('Please enter a title');
      return;
    }
    if (emailOfShared && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            emailOfShared,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task added successfully');
      }
      if (type === 'update') {
        if (todo.title) {
          dispatch(updateTodo({ ...todo, emailOfShared }));
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
              <h1 id="ShareListHeader" className={styles.formTitle}>
                Share {listTitle}
              </h1>
              <label htmlFor="emailOfShared">
                Email of user:
                <input
                  type="email"
                  id="EmailOfShared"
                  value={emailOfShared}
                  onChange={(e) => setEmailOfShared(e.target.value)}
                />
              </label>
              <input
                type="checkbox"
                id="isEdit"
                // value={title}
                // onClick={(e) => (isEdit = e.target.checked)}
                onChange={(e) => alert(e.target.checked)}
                isEdit={(e) => isEdit = e.target.checked}
                />
              <label>&nbsp;&nbsp;Allow user to edit {listTitle}</label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary" onClick={() => handleShare(emailOfShared, isEdit)}>
                  Share
                </Button>
                <Button variant="cancel" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
              <br/>
              <div>
                <h4>Manage Current Shares:</h4>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ShareModal;