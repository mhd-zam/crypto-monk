import { createContext, useState } from "react";

export const PageContext = createContext(null)


export default function Page({ children }) {
    let [page, pageSet] = useState(1)
    
    return (
        <PageContext.Provider value={{ page, pageSet }}>
            {children}
        </PageContext.Provider>
    )
}