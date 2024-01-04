import $ from "../index";

type loginDataTypes = {
  email: string;
  password: string;
};

type ResponseTypes = Promise<{
  error: boolean;
  serverResponse: {
    [key: string]: any;
  };
}>;

export function registerAPI(data: any): ResponseTypes {
  // console.log('look i got here');
  return $({
    url: "/auth/register",
    method: "post",
    data: data,
  });
}

export function loginAPI(data: loginDataTypes): ResponseTypes {
  // console.log('look i got here');
  return $({
    url: "",
    method: "post",
    data: data,
  });
}
