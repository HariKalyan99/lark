import React from 'react'
import logo from '/lark_logo.png'
import clogo from '/company.png'
import ulogo from '/user.png'

const JumboTron = ({nav, noBg}) => {
  if(noBg){
    return (

      <section
        className="py-5 text-center container-fluid"
        style={{background: "rgb(0,0,0)",
          background: "linear-gradient(38deg, rgba(0,0,0,1) 13%, rgba(1,84,62,1) 100%)"}}
      >
        <div className='container'>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-12 py-5">
            <div className='logo_lark' onClick={() => nav("land")}>
              <img src={clogo} alt="logo-img" className='logo_lark_img'/>
            </div>
            {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p> */}
          </div>
          <div className="col-lg-6 col-md-12 py-5">
            <div className='logo_lark' onClick={() => nav("land")}>
              <img src={ulogo} alt="logo-img" className='logo_lark_img'/>
            </div>
            {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p> */}
        </div>
        </div>
        </div>
          
      </section>
    )
  }else{
    return (
      <section
        className="py-5 text-center container-fluid bg_main"
        style={{
          background: "rgb(255,255,255)",
          background:
            "linear-gradient(150deg, rgba(255,255,255,1) 13%, rgba(1,84,62,1) 13%, rgba(11,91,70,1) 78%, rgba(255,255,255,1) 78%)",
          "min-height": "500px",
          "border-top": "1px solid white",
        }}
      >
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <div className='logo_lark' onClick={() => nav("main")}>
              <img src={logo} alt="logo-img" className='logo_lark_img'/>
            </div>
            {/* <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p> */}
          </div>
        </div>
      </section>
    )
  }
}

export default JumboTron