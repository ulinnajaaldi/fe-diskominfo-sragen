import React from "react";
import Link from "next/link";

export interface Breadcrumb {
  title: string;
  slug?: string;
}

export interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <aside data-cursor="-exclusion" className="container">
      <div className="relative">
        <div className="xs:text-base absolute left-0 top-0 mt-3 flex flex-wrap gap-y-1 text-sm">
          {items.map((breadcrumb, index) => (
            <div key={index} className="flex items-center">
              {breadcrumb?.slug ? (
                <Link
                  href={breadcrumb.slug}
                  className="btnAnimation inline-grid overflow-hidden"
                >
                  <span id={`breadcrumb-item-${index}`}>
                    {breadcrumb.title}
                  </span>
                </Link>
              ) : (
                <p>{breadcrumb.title}</p>
              )}
              {index !== items.length - 1 && (
                <span className="mx-2 font-bold text-gray-400">/</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Breadcrumbs;