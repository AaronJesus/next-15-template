import { NoData } from "@/components/Displays/NoData";

export default function NotFoundPage() {
  return (
    <NoData type="err" text="Esta pagina no existe" className="border-0" />
  );
}
