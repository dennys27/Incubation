import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export default function AdminContexts({ children }) {
  const [admin, setAdmin] = useState('');

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
