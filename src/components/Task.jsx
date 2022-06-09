import trashHover from '../assets/trashHover.svg'
import trash from '../assets/trash.svg'
import { task, customRadio } from './Task.module.css'

export function Task({ onDelete, onUpdate, task: item }) {
  function handleUpdateStatus() {
    onUpdate(item)
  }

  function handleDelete() {
    onDelete(item)
  }

  return (
    <div className={task}>
      <div className={customRadio}>
        <input onClick={handleUpdateStatus} type="checkbox" />
        <span></span>
      </div>
      <span>{item.description}</span>
      <button 
        onClick={handleDelete}
      >
        <img
          onMouseOut={(e) => e.target.src = trash}
          onMouseOver={e => e.target.src = trashHover}
          src={trash}
          alt="Remover tarefa" />
      </button>
    </div>
  )
}