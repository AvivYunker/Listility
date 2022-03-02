import React from 'react'
// import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md'
import Button from './Button';

const TodoModal = ({ modalOpen, setModalOpen }) => {
  return (
      <div>
      {modalOpen && (
      <div /*className={styles.wrapper}*/>
          <div /*className={styles.container}*/>
              <div /*className={styles.closeButton}*/>
                <MdOutlineClose/>
              </div>
              <form /*className={styles.form}*/>
                    <h1 /*className={StyleSheet.formTitle}*/>Add Task</h1>
                    <label htmlFor="title">
                        title
                        <input type="text" id="title"/>
                    </label>
                    <label htmlFor="status">
                        status
                        <select name="status" id="status">
                            <option value="incomplete">incomplete</option>
                            <option value="complete">complete</option>
                        </select>
                    </label>
                    <div /*className={StyleSheet.buttonContainer}*/>
                        <Button type="submit" variant="primary">
                            Add Task
                        </Button>
                        <Button type="button" variant="secondary">
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