import { useState } from 'react'
import Form from '@/components/Form'
export default function SignupRoute({ callback }) {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    alert('register')
    const { email, password } = formData
    await callback({ email, password }) 
  }

  return <Form
    title="Sign Up"
    buttonText="Sign Up"
    formData={formData}
    setFormData={setFormData}
    callback={handleRegister}
  />
}
