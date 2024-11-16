import React, { ReactElement } from "react";
import { Footer, Navbar } from ".";
import ContentLoader from "../atoms/LoadingIndicator";

type Layout_Tp = {
  children: ReactElement;
};

function Layout({ children }: Layout_Tp) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ContentLoader>{children}</ContentLoader>
      <Footer />
    </div>
  );
}

export default Layout;
