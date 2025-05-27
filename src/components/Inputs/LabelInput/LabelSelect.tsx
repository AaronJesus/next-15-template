"use client";
import "./LabelInput.scss";
import React, { ReactNode, SelectHTMLAttributes } from "react";
import { IvalueName } from "@/global/interfaces/general.interface";
import { IoAdd } from "react-icons/io5";

interface IlblInp extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  labelClass?: string;
  containerClass?: string;
  inputContainer?: string;
  error?: string | string[];
  icon?: ReactNode;
  options: IvalueName[];
  selected?: string | number;
  placeholder?: string;
}

export const LabelSelect = (props: IlblInp) => {
  const {
    label,
    labelClass = "",
    containerClass = "",
    className = "",
    inputContainer = "",
    icon,
    error,
    options,
    placeholder,
    ...rest
  } = props;

  return (
    <div
      className={`label-input-container flex flex-col gap-1 ${containerClass}`}
    >
      {label && <label className={` ${labelClass}`}>{label}</label>}
      <div className={`flex-center-3 input-container ${inputContainer}`}>
        {icon && icon}
        <select className={`input-element ${className}`} {...rest}>
          <option value={undefined} hidden>
            {placeholder ? placeholder : "Selecciona una opcion"}
          </option>
          {options.map((m, i) => {
            return (
              <option key={m.value + "_" + i} value={m.value}>
                {m.name}
              </option>
            );
          })}
        </select>
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
