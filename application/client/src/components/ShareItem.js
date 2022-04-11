import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../assets/styles/modules/todoItem.module.scss'
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';
import { useAppContext } from '../context/appContext';

import {AiFillEdit, AiFillEye } from 'react-icons/ai'

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ShareItem({ userName, userEmail, listId, isEdit, userId }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const { removeShare } = useAppContext();

  const handleDeleteShare = (listId, userId) => {
    // alert("the listId is: " + listId)
    // alert("the userId is: " + userId)
    alert("The isEdit is: " + isEdit)
    // dispatch(removeShare(listId, userId))
  }

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <div className={styles.texts}>
            <p
            id="TaskItem"
              className={getClasses([
                styles.todoText,
              ])}
            >
              {/* {todo.taskTitle} */}
              {userName} {isEdit ? <AiFillEdit/> : <AiFillEye/>}
            </p>
            {/* {isEdit ? <AiFillEdit/> : <AiFillEye/>} */}
            {/* <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p> */}
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDeleteShare(listId, userId)}
            tabIndex={0}
            role="button"
          >
            <MdDelete/>
          </div>
            {/* should be 'X' icon */}
        </div>
      </motion.div>
    </>
  );
}

export default ShareItem;
