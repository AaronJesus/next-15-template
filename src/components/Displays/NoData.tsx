import { LuSearchX, LuTextSearch } from "react-icons/lu";
import { RiCloseLargeLine } from "react-icons/ri";
import { LoaderSpinner } from "./LoaderSpinner/LoaderSpinner";

export const NoData = ({
  text,
  type = "list",
  loading,
  className = "",
}: {
  className?: string;
  text?: string;
  type?: "err" | "list" | "page";
  loading?: boolean;
}) => {
  const returnText = () => {
    if (loading) {
      return "Cargando...";
    }
    if (text) {
      return text;
    }
    if (type === "err") {
      return "Hubo un error con la información";
    }
    if (type === "page") {
      return "No se encontro el elemento";
    }
    return "No se encontraron resultados";
  };

  const returnIcon = () => {
    if (loading) {
      return <LoaderSpinner size={80} color="info" />;
    }
    if (type === "err") {
      return <RiCloseLargeLine className="text-danger" size={80} />;
    }
    if (type === "page") {
      return <LuTextSearch size={80} className="text-warning" />;
    }
    return <LuSearchX size={80} className="text-warning" />;
  };
  return (
    <div
      className={`w-full h-full border rounded-xl flex-center-3 flex-col justify-center p-3 ${className}`}
    >
      <div className="border p-3 rounded-xl">{returnIcon()}</div>
      <p className="max-w-[300px] text-center">{returnText()}</p>
    </div>
  );
};
