import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    const [date,setDate] = useState(new Date('April 05 2022'));
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });
// console.log(month,day, year)
    return(
        <>
            {/* <p> Time : {date.toLocaleTimeString()}</p> */}
            {/* <p> Date : {date.toLocaleDateString()}</p> */}
            {date.toString()}
        </>
    )
}

export default DateTime