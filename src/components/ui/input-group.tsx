'use client'

import { FieldError } from "react-hook-form"
import { Input } from "./input"
import React, { ReactNode } from "react"
import { Label } from "./label"

export interface InputGroupProps {
  label?: string,
  helperText?: string,
  error?: FieldError | undefined
}

export const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, helperText, error, ...rest }, ref) => {
    return (
      <InputGroupWrapper>
        <Label>{label}</Label>
        <span className="text-sm text-muted-foreground">
          {helperText}
        </span>
        <Input ref={ref} {...rest} />
        {!!error?.message ? (
          <Error>{error?.message}</Error>
        ) : ""}
      </InputGroupWrapper>
    )
  }
);

export function Error({children}: {children: ReactNode}){
  return (
    <p className="text-red-500 text-xs absolute bottom-1">{children}</p>
  )
}

export function InputGroupWrapper({children}: {children: ReactNode}){
  return (
    <fieldset className="relative flex flex-col gap-1 pb-6">
      {children}
    </fieldset>
  )
}

InputGroup.displayName = 'InputGroup';
