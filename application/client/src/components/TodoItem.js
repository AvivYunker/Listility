import { format } from 'morgan';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';
// import styles from '../styles/modules/todoItem.module.scss'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
      if (todo.status === 'complete') {
          setChecked(true);
      }else {
          setChecked(false);
      }
  }, [todo.status]);

  const handleDelete = () => {
      dispatch(deleteTodo());
      toast.success('Todo Deleted Successfully');
  }
  const handleUpdate = () => {
      setUpdateModalOpen(true)
  }
  return (
      <>
      <div /*className={styles.item}*/>
          <div /*className={styles.todoDetails}*/>
              <CheckButton/>
              <div /*className={styles.texts}*/>
                  <p /*className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--complete']])}*/>{todo.title}</p>
                  <p /*className={styles.time}*/>
                      {format(new Date(todo.time), 'p, MM/dd/yyyy')}
                  </p>
              </div>
          </div>
          <div /*className={styles.todoActions}*/>
              <div /*className={styles.icon}*/ onKeyDown={handleDelete} onClick={handleDelete} role="button" tabIndex={0}>
                  <MdDelete/>
              </div>
              <div /*className={styles.icon}*/ onKeyDown={handleUpdate} onClick={handleUpdate} role="button" tabIndex={0}>
                    <MdEdit/>
              </div>
          </div>
      </div>
      <TodoModal type="update" todo={todo} modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen}/>
    </>
  );
}

export default TodoItem