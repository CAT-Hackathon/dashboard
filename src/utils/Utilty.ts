import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import cryptoJS from "crypto-js";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const encrypt = (data: string, key: string) => {
  return cryptoJS.AES.encrypt(data, key).toString();
};

export const decrypt = (data: string, key: string) => {
  return cryptoJS.AES.decrypt(data, key).toString(cryptoJS.enc.Utf8);
};
