import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../assets/styles/modules/app.module.scss'


// import TodoItem from './TodoItem';
import ShareItem from './ShareItem';


const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function ShareContainer({listId, shares}) {
  // const todoList = useSelector((state) => state.todo.todoList);
  const shareList = shares
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedSharesList = [...shareList];

  sortedSharesList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredShareList = sortedSharesList.filter((share) => {
    // tasks.map((task) => {
    //   console.log("##Title ID is: " + task._id)
    //   console.log("##Title is: " + task.taskTitle)
    //   console.log("##IsChecked: " + task.isChecked)
    // })
    if (filterStatus === 'all') {
      return true;
    }
    return share.status === filterStatus;
  });

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredShareList && filteredShareList.length > 0 ? (
          filteredShareList.map((share) => (
            // <motion.div key={todo.id} variants={child}>
            <ShareItem userName={share._id.name} userEmail={share._id.userEmail} listId={listId} isEdit={share._id.isEdit} userId={share._id.userId}/>
            // </motion.div>
          ))
    // shares.map((share) => {
    //   alert(share.isEdit)
    //   alert(share._id.name)
    //   alert(share._id.email)
    // });
        ) : (
          <motion.p id="NoSharesFound" variants={child} className={styles.emptyText}>
            There are no current shares.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ShareContainer;