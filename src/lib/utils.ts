import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function formatAmount(amount: number) {
//   return amount.toLocaleString();
// }

export function formatAmount(amount: number) {
  const numericAmount = Number(amount);

  if (isNaN(numericAmount)) {
    return "Invalid Amount";
  }

  const formattedAmount = numericAmount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedAmount;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Extract components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function formatTime(dateString: string) {
  const dateObject = new Date(dateString);

  // Get hours, minutes, and seconds
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  // Format the time as a string
  const timeString = `${hours}:${minutes}`;

  return timeString;
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

export function capitalizeFirstLetter(str: string) {
  // Split the string into an array of words
  let words = str.split(" ");

  // Capitalize the first letter of each word
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  // Join the words back into a string
  let capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
}
