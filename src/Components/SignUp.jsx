import React, { useContext } from 'react';
import { Input, Link, Button, Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from 'react-hook-form';
import RegistrationContext from '../Context/RegistrationContext';

export const SignUp = () => {
    const { register, formState: { isValid, isDirty } } = useFormContext();
    const { handleChange, onSubmit, setSelected } = useContext(RegistrationContext);
    return (
        <form className="flex flex-col gap-4">
            <Input isRequired label="Name" placeholder="Enter your name" type="name" onValueChange={(value) => handleChange('name', value)}
                {...register("name")} />
            <Input isRequired label="Email" placeholder="Enter your email" type="email" onValueChange={(value) => handleChange('email', value)}
                {...register("email")} />
            <Input isRequired label="Age" placeholder="Enter your age" type="number" onValueChange={(value) => handleChange('age', value)}
                {...register("age")} />
            
            <Select
                items={[{label: 'Male', value: 'male', description: 'Male'}, {label: 'Female', value: 'female', description: 'female'}]}
                label="Gender"
                placeholder="Select your gender"
                onChange={(e) => handleChange('gender', e.target.value)}
            >
                {(el) => <SelectItem key={el.value}>{el.label}</SelectItem>}
            </Select>

            <Select
                items={[{label: 'Student', value: 'student', description: 'Student'}, {label: 'Teacher', value: 'teacher', description: 'teacher'}]}
                label="Role"
                placeholder="Select your role"
                onChange={(e) => handleChange('role', e.target.value)}
            >
                {(el) => <SelectItem key={el.value}>{el.label}</SelectItem>}
            </Select>
            
            <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
                onValueChange={(value) => handleChange('password', value)}
                {...register("password")}
            />
            <p className="text-center text-small">
                Already have an account?{" "}
                <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                </Link>
            </p>
            <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={onSubmit} disabled={!isDirty || !isValid}>
                    Sign up
                </Button>
            </div>
        </form>
    )
}