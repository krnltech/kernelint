import React, { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
