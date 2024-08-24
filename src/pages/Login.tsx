import Logo from "@assets/svg/FullLogo.svg?react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/src/validations/login";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoFill } from "react-icons/pi";

import useLogin from "@hooks/useLogin";
import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";
import { useNavigate } from "react-router-dom";
import { encrypt } from "../utils/Utilty";
const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginSchema>>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });
  const { mutate } = useLogin();
  const submitForm: SubmitHandler<z.infer<typeof LoginSchema>> = (data) => {
    mutate(data, {
      onSuccess(data) {
        localStorage.setItem(
          "token",
          encrypt(data.access_token, import.meta.env.VITE_TOKEN_SECRET)
        );
        if (data.access_token) {
          SuccessToast("Success login welcome to Met2ashara", navigate, "/");
        } else {
          ErrorToast(data.error.message);
        }
      },
    });
  };
  return (
    <div className="flex min-h-screen">
      {/* Left Section with Logo */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-500 to-white">
        <div className="text-center">
          <div className=" p-4 rounded-full inline-block mb-4">
            <Logo className="h-[400px] " />
          </div>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Welcome To Met2ashara
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Start your journey towards a successful career here. Let us help you
            get hired!
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile number</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Enter Your Mobile Number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          placeholder="Please enter your Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <a href="/" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Log in
              </Button>
            </form>
          </Form>

          <div className="my-6 text-center">
            <p>Or Sign up with</p>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-slate-400 text-black p-2 rounded-full flex items-center">
              <FaFacebookF />
            </button>
            <button className="bg-slate-400 text-black  p-2 rounded-full flex items-center">
              <FcGoogle />
            </button>
            <button className="bg-slate-400 text-black  p-2 rounded-full flex items-center">
              <PiAppleLogoFill />
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don’t have an account?
              <Link to={"/signup"} className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
