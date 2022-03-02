import React from 'react'
import Button, { SelectButton } from './Button'
import TodoModal from './TodoModal'


const AppHeader = () => {
  return (
    <div /*className={styles.appHeader}*/>
        <h1>hello from header</h1>
        <Button type="button" variant="secondary">Add Task</Button>
        <SelectButton id="status">
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal/>
    </div>
  )
}

export default AppHeader