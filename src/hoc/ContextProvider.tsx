import React, {createContext, FC, PropsWithChildren, useState} from 'react';

type ThemeContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const Context = createContext<ThemeContextType | null>(null);

interface IProps extends PropsWithChildren {

};

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useState<boolean>(true)
    return (
        <Context.Provider value={state}>
                {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};