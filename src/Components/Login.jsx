import React, { useContext } from 'react';
import { Input, Link, Button } from "@nextui-org/react";
import { useFormContext } from 'react-hook-form';
import RegistrationContext from '../Context/RegistrationContext';

export const Login = () => {
    const { register, formState: { isDirty, isValid } } = useFormContext();
    const { handleChange, onSubmit, setSelected } = useContext(RegistrationContext);
    return (
        <form className="flex flex-col gap-4">
            <Input isRequired label="Email" placeholder="Enter your email" type="email" onValueChange={(value) => handleChange('email', value)} {...register("email")} />
            <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
                onValueChange={(value) => handleChange('password', value)}
                {...register("password")}
            />
            <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                </Link>
            </p>
            <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary" onClick={onSubmit} disabled={!isDirty || !isValid}>
                    Login
                </Button>
            </div>
        </form>
    )
};