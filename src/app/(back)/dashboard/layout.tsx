import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Dashboard only
      {children}
    </div>
  );
};

export default layout;
