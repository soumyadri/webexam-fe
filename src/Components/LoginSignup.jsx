import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form"
import { Login } from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import { hasAllKeys } from "../utils";
import { RegistrationContextProvider } from "../Context/RegistrationContext";

export const LoginSignup = () => {
    const [selected, setSelected] = React.useState("login");
    const form = useForm();
    const {
        setValue,
        getValues,
    } = form;

    const handleChange = (key, value) => {
        setValue(key, value);
    };

    const onSubmit = (e) => {
        const { name, age, role, gender, email, password } = getValues();
        let payload = {};
        if (selected === 'login') {
            payload = {
                email,
                password,
            };
        } else {
            payload = {
                firstName: name?.split(' ')[0],
                lastName: name?.split(' ')[1],
                age,
                role,
                gender,
                email,
                password,
            };
        };
        const allKeysArePresent = hasAllKeys(payload);
        console.log(allKeysArePresent);
        return;
    };

    return (
        <div className="flex flex-col w-full max-w-[400px] mx-auto mt-10 bg-[aliceblue] p-1 rounded-lg border-4 border-sky-100">
            <Card className="max-w-full w-[400px]">
                <CardBody className="overflow-hidden">
                    <RegistrationContextProvider params={{ handleChange, onSubmit, setSelected }}>
                        <FormProvider {...form}>
                            <Tabs
                                fullWidth
                                size="md"
                                aria-label="Tabs form"
                                selectedKey={selected}
                                onSelectionChange={setSelected}
                            >
                                <Tab key="login" title="Login">
                                    <Login handleChange={handleChange} onSubmit={onSubmit} setSelected={setSelected} />
                                </Tab>
                                <Tab key="sign-up" title="Sign up">
                                    <SignUp handleChange={handleChange} onSubmit={onSubmit} setSelected={setSelected} />
                                </Tab>
                            </Tabs>
                        </FormProvider>
                    </RegistrationContextProvider>
                </CardBody>
            </Card>
        </div>
    )
};