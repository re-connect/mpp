import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({children}) => (
  <div>
    <Header/>
    {children}
  </div>
);

export default Page;
