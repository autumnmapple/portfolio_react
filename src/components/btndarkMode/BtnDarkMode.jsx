import { useState, useEffect, useRef } from 'react'
import sun from './Sun.svg'
import moon from './Moon.svg'
import './style.css'
const BtnDarkMode = () => {
    const [darkMode, setDarkMode]=useState('light'); //на входе стартовое значение-light, после получаем массив [состояние(изначально light и вызывая функцию можем менять его), функция]
    const btnRef=useRef(null);
    
    useEffect(()=>{
        if(darkMode==='dark'){
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active')
        } else{
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode]) //каждый раз будет изменяться элемент darkMode от действий выше

    const toggleDarkMode=()=>{
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }
    return (  
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}
 
export default BtnDarkMode;