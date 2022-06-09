import styles from './Form.module.css'
import plus from '../assets/plus.png'
import { useState } from 'react'

export function Form({ onSubmit }) {
  const [inputText, setInputText] = useState('')

  function handleInputText(e) {
    setInputText(e.target.value)
  }

  function handleNewTask(e) {
    e.preventDefault()
    const newTask = {
      id: new Date().getTime(),
      description: inputText,
      status: false
    }
    onSubmit(newTask)
    setInputText('')
  }

  return (
    <form onSubmit={handleNewTask} className={styles.form} action="#">
      <input
        type="text"
        onChange={handleInputText}
        value={inputText}
      />
      <button
        disabled={inputText.length === 0}
        type="submit">
        Criar  <img src={plus} alt="" />
      </button>
    </form>
  )
}