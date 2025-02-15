import { EmployeeSessionProvider } from "../../contexts/auth/SessionContext";
import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
  title: "BTM",
  description: "Generated by create next app",
};

export default function WebLayout({ children }) {
  return (
    <EmployeeSessionProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </EmployeeSessionProvider>
  );
}
