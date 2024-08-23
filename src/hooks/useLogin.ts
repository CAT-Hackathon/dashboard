import { useMutation } from "react-query";

interface Iprops {
  phone: string;
  password: string;
}

const useLogin = () => {
  return useMutation({
    mutationFn: (data: Iprops) =>
      fetch("https://ncodenfun.frevva.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.phone,
          password: data.password,
        }),
      }).then((response) => response.json()),
  });
};

export default useLogin;
