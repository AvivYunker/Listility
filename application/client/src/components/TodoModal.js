import React, { useState } from 'react'
// import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice';
import Button from './Button';
import { v4 as uuid } from 'uuid';

const TodoModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log({ title, status });
    if (title && status) {
        dispatch(addTodo({
           id: uuid(),
           title,
           status,
           time: new Date().toLocaleDateString(),
        }));
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
                    <h1 /*className={StyleSheet.formTitle}*/>Add Task</h1>
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
                            Add Task
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