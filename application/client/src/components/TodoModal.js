import React, { useEffect, useState } from 'react'
// import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../slices/todoSlice';
import Button from './Button';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast'

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

const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  useEffect(() => {
      if (type === 'update' && todo) {
        setTitle(todo.title);
        setStatus(todo.status);
      } else {
        setTitle('');
        setStatus('incomplete');
      }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
        toast.error('Please enter a title');
        return;
    }
    if (title && status) {
        if (type === 'add') {
            dispatch(addTodo({
                id: uuid(),
                title,
                status,
                time: new Date().toLocaleDateString(),
            }));
            toast.success('Task Added Successfully');
        }
        if (type === 'update') {
            if (todo.title !== title || todo.tatus !== status) {
                dispatch(updateTodo({
                    ...todo,
                    title,
                    status,
                }));

            } else {
                toast.error("No changes made");
                return;
            }
        }
    setModalOpen(false);
    }
  }

  return (
      <div>
          {/* <AnimatePresence> */}
      {modalOpen && (
          <div /*className={styles.wrapper} initial={{opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}*/>
          <div /*className={styles.container} variants={dropIn} initial="hidden" animate="visible" exit="exit"*/>
              <div /*className={styles.closeButton} initial={{top: 40, opacity: 0}} animate={{ top:-10, opacity: 1 }} exit={{top: 40, opacity: 0}}*/onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button">
                <MdOutlineClose/>
              </div>
              <form /*className={styles.form}*/ onSubmit={(e) => handleSubmit(e)}>
                    <h1 /*className={StyleSheet.formTitle}*/> {type === 'update' ? 'Update' : 'Add'}Task</h1>
                    <label htmlFor="title" onChange={(e) => setTitle(e.target.value)}>
                        title
                        <input type="text" id="title"/>
                    </label>
                    <label htmlFor="status">
                        status
                        <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="incomplete">incomplete</option>
                            <option value="complete">complete</option>
                        </select>
                    </label>
                    <div /*className={StyleSheet.buttonContainer}*/>
                        <Button type="submit" variant="primary">
                            {type === 'update' ? 'Update' : 'Add'} Task
                        </Button>
                        <Button type="button" variant="secondary" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)}>
                            Cancel
                        </Button>
                    </div>
              </form>
          </div>
      </div>
      )}
      {/* </AnimatePresence> */}
      </div>
  );
}

export default TodoModal