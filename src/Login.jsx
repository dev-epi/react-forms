import React, { useState } from 'react'

export default function Login() {
    const [form , setForm] = useState({
        email : '',
        password : ''
    })

   

    const handleChange = (e)=>{
        let { value , name} = e.target
        setForm({...form , [name] : value})
        
    }
     const [errors , setErrors] = useState({})
    const signin = (e)=>{
        //annuler l'action par defaut 
        e.preventDefault()
        let validate = {}
        console.log(form)
        if(!form.email.includes('@')){
            validate.email = 'Invalid Email'
        }
        if(form.password.length <6){
           validate.password = 'invalid password'
        }
        //pas des attributs dans l'object errors
       if(Object.keys(validate).length > 0){
        setErrors(validate)
       }else{
        alert('formulaire valide')
       }
    }
  return (
    <div className='col-md-4 offset-md-4 p-5 card'>
        <h2>Login</h2>
        <form onSubmit={signin}>
            <label>Email</label>
            <input type="text" className='form-control' required  name="email"
            onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email}</p>}

            <label>Password</label>
            <input type="password" className='form-control'  name ="password"
            onChange={handleChange} />
               {errors.password && <p className='text-danger'>{errors.password}</p>}  
            <button className='btn btn-primary'>Save</button>
        </form>

    </div>
  )
}
