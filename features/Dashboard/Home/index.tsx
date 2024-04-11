"use client";

import React from "react";
import { useShallow } from "zustand/react/shallow";
import { GrArticle } from "react-icons/gr";
import { FaImages } from "react-icons/fa";
import { MdOutlineVideoCameraBack } from "react-icons/md";

import useAuthStore from "@/hook/useAuth";
import { useGetCount } from "@/useCase/CountUseCase";

const DashboardHomeFeature: React.FC = () => {
  const [data] = useAuthStore(useShallow((state) => [state.data]));

  const { data: dataCount, isLoading } = useGetCount();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <h2 className="font-medium">Hello {data?.data?.username || ""}</h2>
      {isLoading ? (
        <div className="grid animate-pulse grid-cols-3 gap-8 ">
          <div className="h-36 rounded-xl bg-gray-100 p-7 "></div>
          <div className="h-36 rounded-xl bg-gray-100 p-7 "></div>
          <div className="h-36 rounded-xl bg-gray-100 p-7 "></div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-4 rounded-xl border p-7 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Berita</h2>
              <GrArticle className="h-4 w-4" />
            </div>
            <p className="text-2xl font-bold">Total +{dataCount.data.berita}</p>
          </div>
          <div className="space-y-4 rounded-xl border p-7 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Galeri Foto</h2>
              <FaImages className="h-4 w-4" />
            </div>
            <p className="text-2xl font-bold">
              Total +{dataCount.data.galeriImage}
            </p>
          </div>
          <div className="space-y-4 rounded-xl border p-7 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Galeri Video</h2>
              <MdOutlineVideoCameraBack className="h-4 w-4" />
            </div>
            <p className="text-2xl font-bold">
              Total +{dataCount.data.galeriVideo}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHomeFeature;
