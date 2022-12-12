import React, { FC } from "react";
import Navigation from "./Navigation";
import { PageHeader } from "antd";

interface Props {
    children: React.ReactNode,
    title: string,
    subTitle: string
}

// FC 意为函数式组件
const Layout: FC<Props> = ({children, title, subTitle}) => {
    return (
        <div>
            <Navigation />
            <PageHeader className="jumbotron" title={title} subTitle={subTitle} />
            <div style={{ width: "85%", margin: "0 auto"}}>{children}</div>
        </div>
    )
}

export default Layout