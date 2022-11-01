import React from "react";
import Header from "./Header";
import Stack from "@mui/material/Stack";

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = ({children}) => (
  <div>
    <Header/>
    <Stack pt={2}>
      {children}
    </Stack>
  </div>
);

export default Page;
