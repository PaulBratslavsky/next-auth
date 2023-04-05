"use client"
import { useState } from 'react'
import Form from '@/components/Form'

export default function Login() {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })


  const handleLogin = async () => {
    alert('login')
  }  

  return <Form
    title="Login"
    buttonText="Login"
    formData={formData}
    setFormData={setFormData}
    callback={handleLogin}
  />
}
