"use client";
import { IoAdd } from "react-icons/io5";
import "./LabelInput.scss";
import React, { TextareaHTMLAttributes } from "react";

interface IlblInp extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelClass?: string;
  containerClass?: string;
  inputContainer?: string;
  error?: string | string[];
}

export const LabelArea = (props: IlblInp) => {
  const {
    label,
    labelClass = "",
    containerClass = "",
    className = "",
    inputContainer = "",
    error,
    ...rest
  } = props;

  return (
    <div
      className={`label-input-container flex flex-col gap-1 ${containerClass}`}
    >
      {label && <label className={` ${labelClass}`}>{label}</label>}
      <div className={`flex-center-3 input-container ${inputContainer}`}>
        <textarea className={`input-element ${className}`} {...rest} />
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
