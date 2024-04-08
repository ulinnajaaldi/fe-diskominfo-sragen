import React from "react";

import Breadcrumbs, { type Breadcrumb } from "./breadcrumbs";

export interface PageWrapperProps {
  items: Breadcrumb[];
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ items, children }) => {
  return (
    <main className="mb-8 mt-4 sm:mb-14 md:min-h-[80vh]">
      <Breadcrumbs items={items} />
      {children}
    </main>
  );
};

export default PageWrapper;
