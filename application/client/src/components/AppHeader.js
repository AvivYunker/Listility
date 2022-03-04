import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'
import styles from '../styles/modules/modal.module.scss';


const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  }

  return (
    <div className={styles.appHeader}>
        <h1>hello from header</h1>
        <Button type="button" variant="secondary" onClick={() => setModalOpen(true)}>Add Task</Button>
        <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader