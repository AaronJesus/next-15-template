"use client";
import { IoAdd } from "react-icons/io5";
import "./LabelInput.scss";
import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface IlblInp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  containerClass?: string;
  inputContainer?: string;
  error?: string | string[];
  icon?: ReactNode;
}

export const LabelInput = (props: IlblInp) => {
  const {
    label,
    labelClass = "",
    containerClass = "",
    className = "",
    inputContainer = "",
    type,
    icon,
    error,
    ...rest
  } = props;
  const [inputType, setInputType] = useState(type);

  const handleType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <div
      className={`label-input-container rounded-xl flex flex-col gap-1 ${containerClass}`}
    >
      {label && <label className={` ${labelClass}`}>{label}</label>}
      <div className={`flex-center gap-1 input-container ${inputContainer}`}>
        {icon && icon}
        <input
          type={inputType}
          className={`input-element ${className}`}
          onWheel={(e) => {
            if (type === "number") {
              (e.target as HTMLInputElement).blur();
            }
          }}
          {...rest}
        />
        {type === "password" && (
          <button type="button" onClick={handleType} className="shrink-0">
            {inputType !== "password" ? (
              <BsEye size={24} />
            ) : (
              <BsEyeSlash size={24} />
            )}
          </button>
        )}
      </div>
      {error && (
        <>
          {typeof error === "string" ? (
            <label className="danger tag">
              <IoAdd className="rotate-45" />
              {error}
            </label>
          ) : (
            <div className="flex-center-3 flex-wrap">
              {error.map((e, i) => {
                return (
                  <label key={e + "_" + i} className="danger tag">
                    <IoAdd className="rotate-45" />
                    {e}
                  </label>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};
