import React from "react";

import Breadcrumbs, { type Breadcrumb } from "./breadcrumbs";

export interface PageWrapperProps {
  items: Breadcrumb[];
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ items, children }) => {
  return (
    <main className="pb-8 pt-4 sm:pb-14 md:min-h-[60vh]">
      <Breadcrumbs items={items} />
      {children}
    </main>
  );
};

export default PageWrapper;
