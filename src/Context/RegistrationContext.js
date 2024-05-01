import React, { createContext } from 'react';

const RegistrationContext = createContext();

export const RegistrationContextProvider = ({ params, children }) => {
    return (
      <RegistrationContext.Provider value={params}>
        {children}
      </RegistrationContext.Provider>
    );
};

export default RegistrationContext;