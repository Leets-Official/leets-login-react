import './Attendance.css'
import { useContext } from 'react'
import { LoginContext } from './App'
import { useNavigate } from 'react-router-dom'

const Attendance=()=> {
    const {name, part, date} = useContext(LoginContext)
    let att = [false, false, false, false, false, false, false, false]
    const nav = useNavigate()

    const todayM = new Date().getMonth()+1
    const todayD = new Date().getDate()

    if (todayM === 4) {
        if (todayD >= 1 && todayD <= 7){
            att[1] = true
        } else if (todayD >= 8 && todayD <= 14){
            att[2] = true
        } else if (todayD >= 15 && todayD <= 21) {
            att[3] = true
        }
    } else if (todayM === 5){
        if(todayD >= 6 && todayD <= 12){
            att[4] = true
        } else if (todayD >= 13 && todayD <= 19) {
            att[5] = true
        } else if (todayD >= 20 && todayD <= 26) {
            att[6] =true
        } else if (todayD >= 27 && todayD <= 31){
            att[7] = true
        }
    } else if (todayM === 6) {
        if (todayD >= 1 && todayD <= 2){
            att[7] = true
        } else if (todayD >= 3 && todayD <= 9 ){
            att[8] = true
        }
    }

    return (
        <div className='Attendance'>
            <section>
                {name}님<br/>
                {part}<br/>
            </section>
            <section>
                {date}
            </section>
        </div>
    )
}