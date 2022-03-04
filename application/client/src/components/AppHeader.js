import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'


const AppHeader = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div /*className={styles.appHeader}*/>
        <h1>hello from header</h1>
        <Button type="button" variant="secondary" onClick={() => setModalOpen(true)}>Add Task</Button>
        <SelectButton id="status">
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader