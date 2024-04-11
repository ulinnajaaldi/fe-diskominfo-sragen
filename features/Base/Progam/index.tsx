import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageWrapper from "@/components/common/page-wrapper";
import { PROGAMS } from "./config";

const ProgamFeature = () => {
  const items = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Program SKPD",
    },
  ];

  return (
    <PageWrapper items={items}>
      <section className="container relative pt-5">
        <h1 className="text-2xl font-bold text-blue-950">PROGRAM SKPD</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Program</TableHead>
              <TableHead>Nama Kegiatan</TableHead>
              <TableHead>Nilai Anggaran (Rupiah)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PROGAMS.map((item, index) => (
              <TableRow key={index} className="text-sm md:text-base">
                <TableCell className="font-medium">{item.nama}</TableCell>
                <TableCell>{item.kegiatan}</TableCell>
                <TableCell>{item.anggaran}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </PageWrapper>
  );
};

export default ProgamFeature;
