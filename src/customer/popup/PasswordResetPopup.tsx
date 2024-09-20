import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useMutation } from "../../hooks/useMutation";
import { toast } from "react-toastify";

type PasswordPopupProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PasswordResetPopup = ({ open, setOpen }: PasswordPopupProps) => {
  const { mutate } = useMutation();
  const [email, setEmail] = useState("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const clickHandler = () => {
    mutate("/mail/forgotpassword", "POST", { email });
    setOpen(false);
  };
  return (
    <Popup
      contentStyle={{ maxWidth: "500px" }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <ParaTypo className="text-center text-3xl font-semibold text-green-500">
        Please enter your email
      </ParaTypo>
      <ParaTypo className="text-center opacity-70 text-sm my-2">
        After submit email you will get a verification token on this mail and it
        is only valid for 2 min.Thank you
      </ParaTypo>
      <Input
        value={email}
        onChange={changeHandler}
        className="w-full h-[50px]"
        type="text"
      />
      <Button
        onClick={clickHandler}
        className="mx-auto block bg-red-500 my-3 px-8"
      >
        Submit
      </Button>
    </Popup>
  );
};

export default PasswordResetPopup;
