import React, { useEffect, useState } from 'react'
// import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../slices/todoSlice';
import Button from './Button';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast'

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
            }
        }
    setModalOpen(false);
    }
  }

  return (
      <div>
      {modalOpen && (
      <div /*className={styles.wrapper}*/>
          <div /*className={styles.container}*/>
              <div /*className={styles.closeButton}*/onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button">
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
      </div>
  );
}

export default TodoModal