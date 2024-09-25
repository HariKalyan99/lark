import React from 'react'
import JumboTron from '../JumboTron'


const MainPage = ({nav}) => {
  return (
    <div style={{backgroundColor: "var(--primary-green-color)"}}>
        <h1 className='fs-1 fw-bolder text-center pt-5 text-white'>WELCOME TO THE <span className=' text-decoration-underline'>LARK</span></h1>
        <JumboTron noBg nav={nav}/>
    </div>
  )
}

export default MainPage