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
