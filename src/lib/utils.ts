import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number) {
  return amount.toLocaleString();
}

export function formatPhone(phoneNumber: string) {

  if (/^\+\d{1,3}\d{10}$/.test(phoneNumber)) {
    return phoneNumber; 
  }

  if (!phoneNumber.startsWith("0")) {
    phoneNumber = "0" + phoneNumber;
  }

  return "+234" + phoneNumber.slice(1);
}

import Cookies from "js-cookie";

export function saveToken(token: string) {
  Cookies.set("token", token);
  return true;
}

export function removeToken() {
  Cookies.remove("token");
  return true;
}

export function getToken() {
  let token = Cookies.get("token");
  if (token) {
    return token;
  } else {
    return false;
  }
}

export function hasToken() {
  let token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

export function fmtResponse(responseData: any, error: boolean) {
  let { statusText, status, data } = responseData;

  if (error) {
    return {
      status,
      serverResponse: data,
      statusText,
      error: true,
    };
  } else {
    return {
      status,
      serverResponse: data,
      statusText,
      error: false,
    };
  }
}
