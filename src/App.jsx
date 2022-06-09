import { useState } from 'react'
import './App.css'
import emptyList from './assets/clipboard.png'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { Task } from './components/Task'


function App() {
  const [tasks, setTasks] = useState([])

  function createNewTask(task) {
    setTasks([...tasks, task])
  }

  function deleteTask(task) {
    const newTasks = tasks.filter(t => t.id !== task.id)
    setTasks(newTasks)
  }

  function updateStatus(task) {
    const tasksUpdated = tasks.map(t => {
      if (t.id === task.id)
        t.status = !t.status
      return t
    })
    setTasks(tasksUpdated)
  }

  function countStatus(type) {
    const totalTasks = tasks.length
    const tasksFinished = tasks.filter(t => t.status == true).length
    return {
      totalTasks,
      tasksFinished: tasksFinished > 0 ? `${tasksFinished} de ${totalTasks}` : '0'
    }
  }

  return (
    <>
      <Header />
      <main>
        <Form onSubmit={createNewTask} />
        <div className='listHeader'>
          <strong>Tarefas criadas <span>{countStatus().totalTasks}</span></strong>
          <strong>Concluídas <span>{countStatus().tasksFinished}</span></strong>
        </div>
        <div>
          {tasks.length > 0
            ? tasks.map(task => <Task
              onUpdate={updateStatus}
              onDelete={deleteTask}
              key={task.id}
              task={task} />)
            : (<div className='listEmpty'>
              <img src={emptyList} alt="" />
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>)
          }
        </div>
      </main>
    </>
  )
}

export default App
