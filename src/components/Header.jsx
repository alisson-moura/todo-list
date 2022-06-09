import { header } from './Header.module.css'
import logo from '../assets/logo.png'

export function Header() {
  return (
    <header className={header}><img src={logo} alt="" /></header>
  )
}