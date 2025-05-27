import { TsystemColors } from "@/global/interfaces/general.interface";
import "./LoaderSpinner.scss";

export const LoaderSpinner = ({
  size = 40,
  color = "info",
  width = 6,
}: {
  size?: number;
  width?: number;
  color?: TsystemColors;
}) => {
  return (
    <div
      style={{
        width: size + "px",
        borderWidth: width + "px",
        borderInlineColor: "transparent",
        borderBottomColor: "transparent",
      }}
      className={`aspect-square rounded-full spinner-div border-${color}`}
    />
  );
};
