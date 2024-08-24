import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

import SuccessToast from "@components/toasts/SuccessToast";
import ErrorToast from "@components/toasts/ErrorToast";

import useAddCompany from "@hooks/useAddCompany";
import { addCompanySchema } from "../validations/addCompany";

const AddCompany = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof addCompanySchema>>({
    mode: "onBlur",
    resolver: zodResolver(addCompanySchema),
    defaultValues: {
      phone: "",
      website: "",
      name: "",
      address: "",
      email: "",
      description: "",
      industry: "",
      logo: "",
    },
  });

  const { mutate } = useAddCompany();

  const submitForm: SubmitHandler<z.infer<typeof addCompanySchema>> = (
    data
  ) => {
    console.log(data);

    mutate(data, {
      onSuccess(data) {
        console.log(data);

        if (data.data) {
          SuccessToast("company added sucsses", navigate, "/");
        } else {
          ErrorToast("error");
        }
      },
    });
  };

  return (
    <div className="page__container">
      <Form {...form}>
        <form className="pt-8 p-6" onSubmit={form.handleSubmit(submitForm)}>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> name</FormLabel>
                    <FormControl>
                      <Input placeholder="    please enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="    please enter name"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>number</FormLabel>
                    <FormControl>
                      <Input placeholder="please enter phone " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Please enter Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please enter description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> industry</FormLabel>
                    <FormControl>
                      <Input placeholder="Please enter industry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> website</FormLabel>
                    <FormControl>
                      <Input placeholder="Please enter website" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> logo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please enter logo"
                        {...field}
                        type="file"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="secondary" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddCompany;
