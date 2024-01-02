"use client";

import { Icons } from "./icons";
import OtpInput from "react-otp-input";
import * as React from "react";

interface OtpProps
{
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  onPasteHandler?: (data: string) => void;
  error: boolean;
  title?: string;
  handleResend?: () => void;
  defaultSeconds?: number;
  defaultMinutes?: number;
}

export function OTP ({
  code,
  setCode,
  onPasteHandler,
  error,
  title,
  handleResend,
  defaultSeconds = 59,
  defaultMinutes = 1,
}: OtpProps)
{
  const [seconds, setSeconds] = React.useState<number>(defaultSeconds);
  const [minutes, setMinutes] = React.useState<number>(defaultMinutes);

  const handlePaste: React.ClipboardEventHandler = (event) =>
  {
    const data = event.clipboardData.getData("text");

    console.log(data);
    setCode(data);
    onPasteHandler && onPasteHandler(data);
  };

  const resendHandler = () =>
  {
    setSeconds(59);
    setMinutes(1);
    handleResend && handleResend();
  };

  React.useEffect(() =>
  {
    const interval = setInterval(() =>
    {
      if (seconds > 0)
      {
        setSeconds(seconds - 1);
      }

      if (seconds === 0)
      {
        if (minutes === 0)
        {
          clearInterval(interval);
        } else
        {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () =>
    {
      clearInterval(interval);
    };
  });

  return (
    <div className="otp-wrapper grid gap-6">
      <OtpInput
        value={code}
        onChange={setCode}
        onPaste={handlePaste}
        shouldAutoFocus
        skipDefaultStyles={true}
        containerStyle={" space-x-2"}
        inputStyle={`otp-input bg-auth-input text-white text-opacity-40  w-12 h-12 text-white  focus:outline-none text-center rounded-[12px] border ${error ? "border-destructive" : "border-border-connect"
        }`}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
      />

      {/* {minutes > 0 || seconds > 0 ? (
        <p className="text-sm text-border-connect">
          Don’t see it? Send a new code in {`${minutes}:${seconds}s`}
        </p>
      ) : (
        <div className="flex space-x-1 items-center">
          <span className="p-[2px]">
            <Icons.ReloadIcon />
          </span>
          <button role="button" onClick={resendHandler} className="text-sm text-gray-600">Resend code</button>
        </div>
      )} */}
    </div>
  );
}

