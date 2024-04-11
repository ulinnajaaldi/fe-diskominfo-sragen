import React from "react";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";

interface BeritaCardProps {
  berita: any;
  handleBeritaClick: (berita: any) => void;
  handleDelete: (berita: any) => void;
}

const BeritaCard: React.FC<BeritaCardProps> = (props) => {
  const { berita, handleBeritaClick, handleDelete } = props;
  return (
    <div
      className="group relative cursor-pointer space-y-1 rounded-md border p-2 transition duration-300 ease-in-out hover:shadow-md"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleBeritaClick(berita);
      }}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={berita.image}
          alt={berita.title}
          width={400}
          height={400}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <h2 className="line-clamp-2 text-justify font-semibold">
        {berita.title}
      </h2>
      <p className="line-clamp-3 text-justify text-sm">{berita.content}</p>
      <Button
        variant="destructive"
        size="icon"
        onClick={(e) => {
          e.preventDefault(), e.stopPropagation(), handleDelete(berita);
        }}
        className="absolute right-2 top-1 z-30 translate-x-3 opacity-0 transition duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
      >
        <FaRegTrashAlt />
      </Button>
    </div>
  );
};

export default BeritaCard;
