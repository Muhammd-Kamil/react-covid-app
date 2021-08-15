import React from 'react'

const Ui = (props) => {
    return (
        <>
             <div className="body">
           <div className="Main-card">
              {props.o}<span className="name">{props.name}</span>
               <section className="country">{props.value}</section>
           </div> 
           </div>
        </>
    )
}

export default Ui
