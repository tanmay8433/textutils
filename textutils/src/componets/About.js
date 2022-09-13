import React, { useState } from 'react'

export default function About() {
  const[myStyle, setmyStyle]=useState(
  {
    color:'white',
    backgroundColor :'black'
  })
  const[btntext,setBtnText]=useState("Enable Dark Mode")
 const toggleStyle=()=>{
if(myStyle.color ==='white'){
  setmyStyle({
    color:'black',
    backgroundColor:'white'


})
setBtnText("Enable Dark Mode")
}
else{
  setmyStyle({
    color:'white',
    backgroundColor:'black'
  })
  setBtnText("Enable light Mode");
}
}
  return (
    <div className="container" style={myStyle}>
      < h1>
      About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gold Relate
        Inforamtion
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Top Gold Investment Options in India</strong> Invest in Gold Via Gold ETFs. Gold (ETFs) Exchange Traded Funds are units representing physical gold, which may be in dematerialised form or paper form.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    Silver  Relate Information
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Why should you invest in silver futures in India?</strong> By investing in silver futures in India you are agreeing to buy an asset at a future set price. In other words, you are agreeing to pay today’s prices for an asset that gets delivered sometime in the future.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Information 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>How do I invest in physical gold?</strong> When it comes to physical gold, you’ll generally be interacting with dealers outside of traditional brokerages, and you’ll likely need to pay for storage and obtain insurance for your investment. The three main options to invest in physical gold are bullion, coins and jewelry.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
</div>
    </div>
  )
}
