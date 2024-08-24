import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import Error from './error'
import * as Yup from 'yup'
  
const Login = () => {
    const [errors, setErrors] = React.useState([]);
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const handelInputChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handeleLogin = async () => {
        setErrors([]);
        try {
            const schema = Yup.object().shape({
                email: Yup.string().email("Invalid Email").required("Email is required"),
                password: Yup.string().min(6, "Password must be 6 characters").required("Password is required")
            });
            await schema.validate(formData, { abortEarly: false });
        } catch (err) {
            const newErrors = {};
            err?.inner?.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    };
    

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>to your account if you already have one</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                    <div className='space-y-2'>
                        <Input 
                            label='Email' 
                            name='email' 
                            type='email' 
                            placeholder='Enter your email' 
                            onChange={handelInputChanges} 
                        />
                        {errors.email && <Error message={errors.email} />}
                    </div>
                    <div className='space-y-2'>
                        <Input 
                            label='Password' 
                            name='password' 
                            type='password' 
                            placeholder='Enter your Password' 
                            onChange={handelInputChanges} 
                        />
                        {errors.password && <Error message={errors.password} />}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handeleLogin}>
                        {
                            true ? <BeatLoader size={10} color='#36d7b7' /> : 'Login'
                        }
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login;
