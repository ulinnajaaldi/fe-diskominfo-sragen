"use client";

import React from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { Input } from "@/components/ui/input";
import PageWrapper from "@/components/common/page-wrapper";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGaleriImage } from "./hook";

const GaleriImageFeature = () => {
  const { data, isLoading, search, setSearch, handleNextPage, handlePrevPage } =
    useGaleriImage();

  const items = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Galeri Image",
    },
  ];

  return (
    <PageWrapper items={items}>
      <section className="container relative pt-5">
        <h1 className="text-center text-3xl font-bold text-blue-950 md:text-4xl">
          Galeri Foto
        </h1>
        <p className="text-center text-sm text-gray-500 md:text-base">
          Dinas Komunikasi dan Informatika Kabupaten Sragen
        </p>

        <div className="mt-4 flex w-full items-center justify-center sm:justify-end md:mt-0">
          <div className="relative w-full max-w-xs">
            <HiMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder="Cari galeri foto"
              className="pl-8"
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-5">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : data?.data.results.length === 0 ? (
            <p className="text-center text-gray-500">
              Galeri foto tidak ditemukan
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
                {data?.data.results.map((item: any) => (
                  <div
                    key={item.id}
                    className="group relative space-y-1 rounded-md border p-2 transition duration-300 ease-in-out hover:shadow-md md:space-y-2"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="h-full w-full transform rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h2 className="absolute bottom-2 left-0 mx-2 rounded-b-md bg-gray-950/30 px-5 pb-4 pt-4 text-justify text-sm font-semibold text-white transition-all duration-300 group-hover:bg-gray-950/75 md:text-sm">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
              {data?.data.totalPages > 1 && (
                <Pagination className="mt-5 w-full">
                  <PaginationContent className="flex w-full justify-between">
                    {data?.data.prevPage !== null && (
                      <PaginationItem>
                        <PaginationPrevious
                          className="cursor-pointer"
                          onClick={handlePrevPage}
                        />
                      </PaginationItem>
                    )}
                    {data?.data.nextPage !== null && (
                      <PaginationItem>
                        <PaginationNext
                          className="cursor-pointer"
                          onClick={handleNextPage}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default GaleriImageFeature;