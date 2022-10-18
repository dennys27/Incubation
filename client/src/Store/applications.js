import { createContext, useState } from "react";

export const ApplicationContext = createContext(null);

export default function ApplicationContexts({ children }) {
  const [applications, setApplications] = useState(null);

  return (
    <ApplicationContext.Provider value={{ applications, setApplications }}>
      {children}
    </ApplicationContext.Provider>
  );
}
