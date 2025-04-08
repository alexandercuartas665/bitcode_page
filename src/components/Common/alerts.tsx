import { JSX, ReactElement } from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent, { ReactSweetAlertOptions } from "sweetalert2-react-content";

export const MySwal = withReactContent(Swal);

export const Modal = (children: JSX.Element, options: ReactSweetAlertOptions) => {
  MySwal.fire({
    ...options,
    html: children,
  });
};

export const successAlert = (title: string, text: string, footer: any) =>
  MySwal.fire({
    icon: "success",
    title,
    text,
    footer,
  });

export const errorAlert = (title: string, text: string, footer: any) =>
  MySwal.fire({
    icon: "error",
    title,
    text,
    footer,
  });