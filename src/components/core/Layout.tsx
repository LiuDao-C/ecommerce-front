import React, { FC } from "react";

interface Props {
    children: React.ReactNode
}

// FC 意为函数式组件
const Layout: FC<Props> = ({children}) => {
    return (
        <div>
            Layout{children}
        </div>
    )
}

export default Layout