import React from "react";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";

interface GaleriVideoCardProps {
  item: any;
  handleGaleriClick: (item: any) => void;
  handleDelete: (item: any) => void;
}

const GaleriVideoCard: React.FC<GaleriVideoCardProps> = (props) => {
  const { item, handleGaleriClick, handleDelete } = props;
  return (
    <div
      className="group relative cursor-pointer space-y-1 rounded-md border p-2 hover:shadow-md "
      onClick={(e) => {
        e.preventDefault(), e.stopPropagation(), handleGaleriClick(item);
      }}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-md">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={400}
          height={400}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <h2 className="line-clamp-2 px-1 text-justify text-sm font-semibold">
        {item.title}
      </h2>
      <p className="line-clamp-3 px-1 text-sm">{item.description}</p>
      <Button
        variant="destructive"
        size="icon"
        onClick={(e) => {
          e.preventDefault(), e.stopPropagation(), handleDelete(item);
        }}
        className="absolute right-2 top-1 z-30 translate-x-3 opacity-0 transition duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
      >
        <FaRegTrashAlt />
      </Button>
    </div>
  );
};

export default GaleriVideoCard;
