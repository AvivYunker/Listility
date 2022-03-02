import { format } from 'morgan';
import React from 'react'
// import styles from '../styles/modules/todoItem.module.scss'

const TodoItem = ({ todo }) => {
  return (
      <div /*className={styles.item}*/>
          <div /*className={styles.todoDetails}*/>
              []
              <div /*className={styles.texts}*/>
                  <p /*className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--complete']])}*/>{todo.title}</p>
                  <p /*className={styles.time}*/>
                      {format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
              </div>
          </div>
          <div className={styles.todoActions}>
              <div></div>
          </div>
      </div>
  );
}

export default TodoItem