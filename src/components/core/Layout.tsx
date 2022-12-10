import React, { FC } from "react";
import Navigation from "./Navigation";

interface Props {
    children: React.ReactNode
}

// FC 意为函数式组件
const Layout: FC<Props> = ({children}) => {
    return (
        <div>
            <Navigation />
            Layout{children}
        </div>
    )
}

export default Layout