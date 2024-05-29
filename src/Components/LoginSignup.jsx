import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Login } from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import { RegistrationContextProvider } from "../Context/RegistrationContext";
import { login, signup } from "../api";
import { hasAllKeys } from "../utils";

export const LoginSignup = () => {
  const form = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("tab");
  const [selected, setSelected] = React.useState(searchParams || "login");
  const { setValue, getValues } = form;
  const [loading, setLoading] = React.useState(false);

  const handleChange = (key, value) => {
    setValue(key, value);
  };

  const onSubmit = async (e) => {
    try {
      setLoading(true);
      const { name, age, role, gender, email, password } = getValues();
      let payload = {};
      if (selected === "login") {
        payload = {
          email,
          password,
        };
      } else {
        payload = {
          first_name: name?.split(" ")[0],
          last_name: name?.split(" ")[1],
          age,
          role,
          gender,
          email,
          password,
        };
      }
      const allKeysArePresent = hasAllKeys(payload);
      let data;
      if (allKeysArePresent) {
        if (selected === "login") {
          data = await login(payload);
          if (data?.data?.code) {
            const { ...newPayload } = data.data.user;
            localStorage.setItem("user", JSON.stringify(newPayload));
          }
        } else {
          data = await signup(payload);
          if (data?.data?.code) {
            const { password, ...newPayload } = payload;
            localStorage.setItem("user", JSON.stringify(newPayload));
          }
        }
      }
      navigate("/");
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[400px] mx-auto mt-10 bg-[aliceblue] p-1 rounded-lg border-4 border-sky-100">
      <Card className="max-w-full w-[400px]">
        <CardBody className="overflow-hidden">
          <RegistrationContextProvider
            params={{ handleChange, onSubmit, setSelected, isLoading: loading }}
          >
            <FormProvider {...form}>
              <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab key="login" title="Login">
                  <Login
                    handleChange={handleChange}
                    onSubmit={onSubmit}
                    setSelected={setSelected}
                  />
                </Tab>
                <Tab key="sign-up" title="Sign up">
                  <SignUp
                    handleChange={handleChange}
                    onSubmit={onSubmit}
                    setSelected={setSelected}
                  />
                </Tab>
              </Tabs>
            </FormProvider>
          </RegistrationContextProvider>
        </CardBody>
      </Card>
    </div>
  );
};
