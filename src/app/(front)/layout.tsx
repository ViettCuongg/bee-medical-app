import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-blue-950">
      <Navbar />
      <div className="max-w-5xl mx-auto px-3 py-6 ">
        <MegaMenu />
      </div>
      {children}
    </div>
  );
};

export default layout;
