"use client";

// 1 Rem === 16 Px

import { FC, useState } from "react";
import { valueValidation } from "@/utils/valueValidation";
import { Input } from "@/components";

export const Inputs: FC = (): JSX.Element => {
   const [px, setPx] = useState<string>("16");
   const [rem, setRem] = useState<string>("1");

   const pxChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const pxValue: string = valueValidation(ev.target.value);
      const newRem: string = (Number(pxValue) / 16).toString();

      setPx(pxValue);
      setRem(newRem);
   };

   const remChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      const remValue: string = valueValidation(ev.target.value);
      const newPx: string = (Number(remValue) * 16).toString();

      setRem(remValue);
      setPx(newPx);
   };

   return (
      <>
         {/* REM */}
         <Input id="rem" label="Rem" onChange={remChangeHandler} placeholder="Rem" value={rem} min={0} max={1000} />

         {/* PX */}
         <Input id="px" label="Px" onChange={pxChangeHandler} placeholder="Px" value={px} min={0} max={1000} />
      </>
   );
};