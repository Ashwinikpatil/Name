// // // // import React, { useState,useRef} from 'react'

// // // // function Simples() {
// // // //     const [name, setName] = useState({firstName: '', lastName: ''})
// // // //     const input=useRef();
// // // //     // console.log(inputE1);
// // // //     // const resetInput=()=>{
// // // //     //     setName("");
// // // //     //     inputE1.current.focus();
// // // //     //     console.log(inputE1.current.value);
// // // //     //     inputE1.current.firstName=""
// // // //     //     inputE1.current.lastName=""
// // // //     // }

// // // // return(

// // // //     <div>

// // // //     <form>

// // // //     <div>

// // // //       <label>First Name - </label>

// // // //       <input type='text'

// // // //        value={name.firstName} ref={input}

// // // //        onChange={e => setName({...name, firstName: e.target.value})}/>

// // // //     </div>

// // // //     <div>

// // // //       <label>Last Name - </label>

// // // //       <input type='text'

// // // //        value={name.lastName} ref={input} 

// // // //        onChange={e => setName({...name, lastName: e.target.value})}/>

// // // //     </div>

// // // //     </form>

// // // //     <h2>My first name is - {name.firstName}</h2>

// // // //     <h2>My last name is - {name.lastName}</h2>

// // // //     <h2>{JSON.stringify(name)}</h2>
    

// // // //   </div>

// // // // )


// // // // }
// // // // export default Simples;



// // // import React from 'react';
// // // import { useRef, useState } from 'react';
// // // function Simples() {
   
// // //     const [name, setName] = useState({firstName: '', lastName: ''})
// // //    const input=useRef();
// // //     const firstNameRef = useRef();
// // //     const lastNameRef = useRef();
// // //     function handleSubmit(event) {
// // //         event.preventDefault(); 
// // //         const firstName= event.target.elements.firstName.value;
// // //         const lastName= event.target.elements.lastName.value;
        
// // //         firstNameRef.current.value = "";
// // //         lastNameRef.current.value = "";
// // //     }
// // //    return(

// // //         <div>
// // //      <form onSubmit={handleSubmit}>
// // //             <input type="text" name="firstName" placeholder="Enter firstName" ref={firstNameRef}/>
// // //             <input type="text" name="lastName" placeholder="Enter lastname" ref={lastNameRef}/>
// // //             </form>
// // //         <h2>My first name is - {name.firstName}</h2>
    
// // //         <h2>My last name is - {name.lastName}</h2>
    
// // //         <h2>{JSON.stringify(name)}</h2>
        
    
// // //     // 
// // //       </div>
    
// // //     )
    

// // //     }
// // //     export default Simples;
    
// // import React, { useState, useRef,useEffect } from 'react';
// //  function Simples() {
// //     const [name, setName] = useState({firstName: '', lastName: ''})
// //   const firstName = useRef( );
 
// //   useEffect(() => {
// //     input.current.onkeyup = handleChange;
// //     input.current.value = firstName;
// //     input.current.value = lastName;
// //   });
   
// //   function handleChange(e) {
// //     e.preventDefault();
 
// //     setName(e.target.value);
// //   }
 
// //   return (
// //     <div>

// //       <form>

// //       <div>

// //         <label>First Name - </label>

// //         <input type='text' 

// //          value={name.firstName} />

// //       </div>

// //       <div>

// //         <label>Last Name - </label>

// //         <input type='text'

// //          value={name.lastName}/>

// //       </div>

// //       </form>

// //       <h2>My first name is - {name.firstName}</h2>

// //       <h2>My last name is - {name.lastName}</h2>

// //       <h2>{JSON.stringify(name)}</h2>

// //     </div>

// //   )
// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function Simples() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current.name="" ;
//     // inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text" name="name"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current.name}</h2>
//     </>
//   );
// }
// export default Simples;

//Using useRef()
import React, { useState,useRef } from "react";

const Simples=()=>{
    const[formInfo,setFormInfo]=useState('')
    const form=useRef();
    const formData=(e)=>{
        e.preventDefault();
        const name=form.current.name.value;
        const email=form.current.email.value;
        const password=form.current.password.value;
        setFormInfo({name,email,password})
        e.target.reset();
    }
    console.log(formInfo)
    return(
        <>
        <form action="" ref={form} onSubmit={formData}>
            <input type="text" name="name" placeholder="Enter your name"/><br/>
            <input type="text" name="email" placeholder="Enter your email"/><br/>
            <input type="text" name="password" placeholder="Enter your password"/><br/>
            <input type="submit" value="send"/>
        </form>
    
        <h2>My name is - {formInfo.name}</h2>
        <h2>My email is - {formInfo.email}</h2>
        <h2>My password is - {formInfo.password}</h2>
        <h2>{JSON.stringify(formInfo)}</h2>
        </>
    )
}
export default Simples;