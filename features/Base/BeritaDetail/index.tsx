"use client";

import React from "react";
import Image from "next/image";
import { IoCalendarClearOutline } from "react-icons/io5";

import { convertDate } from "@/lib/utils";
import { ROUTES_PATH } from "@/constants/routes";
import { useGetBeritaDetail } from "@/useCase/BeritaUseCase";
import PageWrapper from "@/components/common/page-wrapper";
import PageLoader from "@/components/common/page-loader";

const BeritaDetailFeature = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useGetBeritaDetail(params.id);

  const items = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Berita",
      slug: ROUTES_PATH.berita,
    },
    {
      title: isLoading ? "Loading..." : data?.data.title,
    },
  ];

  return (
    <PageWrapper items={items}>
      <section className="container relative pt-20">
        {isLoading ? (
          <PageLoader />
        ) : (
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">
              {data.data.title}
            </h1>
            <div className="mt-1 flex items-center gap-1 text-sm text-gray-700">
              <IoCalendarClearOutline className="h-4 w-4" />
              <p>{convertDate(data.data.createdAt)}</p>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <Image
                src={data.data.image}
                alt={data.data.title}
                priority
                width={500}
                height={500}
                className="rounded-md"
              />
            </div>
            <p
              className="mt-5 text-justify text-sm md:text-base"
              dangerouslySetInnerHTML={{
                __html: data.data.content.replace(/\n/g, "<br />"),
              }}
            ></p>
          </div>
        )}
      </section>
    </PageWrapper>
  );
};

export default BeritaDetailFeature;
