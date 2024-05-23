import './SuccessLogin.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from './App'

const SuccessLogin = () => {
    let { name, part, date, attendance } = useContext(LoginContext)
    const nav = useNavigate()

    const onClickButton = () => {
        attendance = true;
        nav('./attendance')
    }

    return (
        <div className='Attendance'>
            <section>
            {name}님<br/>
            {part}<br/>
            </section>
            
            <section>
            {date}<br/>
            출석하시겠습니까?
            </section>
    
            <section>
                <button onClick={onClickButton}>출석하기</button>
            </section>
        </div>)
}

export default SuccessLogin