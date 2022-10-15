import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export default function AdminContext({ children }) {
  const [admin, setAdmin] = useState(null);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
