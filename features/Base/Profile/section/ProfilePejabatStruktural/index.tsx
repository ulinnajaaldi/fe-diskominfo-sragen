import React from "react";
import Image from "next/image";

import {
  dataPimpinan,
  DAFTAR_PEJABAT,
  PENDIDIKAN_FORMAL,
  PENDIDIKAN_INFORMAL,
  PERJALANAN_KARIR,
} from "./config";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProfilePejabatStruktural = () => {
  return (
    <aside className="space-y-4">
      <h1 className="text-3xl font-bold text-blue-950 md:text-4xl">
        Profile Pejabat Struktural
      </h1>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-950">Kepala Dinas</h2>
        <div className="flex flex-col gap-5 md:flex-row">
          <Image
            src="/images/placeholder.jpg"
            alt="Kepala Dinas"
            width={500}
            height={500}
            className="h-[300px] w-[300px]"
          />
          <div className="grid grid-cols-3 gap-10 text-sm md:text-base">
            {dataPimpinan.map((item, index) => (
              <React.Fragment key={index}>
                <div className="space-y-2">
                  <p className="font-semibold uppercase">{item.question}</p>
                </div>
                <div className="col-span-2 space-y-2">
                  <p>{item.answer}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-blue-950">Perjalanan Karir</h2>
        <div className="space-y-3 rounded-md border p-5 text-sm text-gray-700">
          {PERJALANAN_KARIR.map((item, index) => (
            <div key={index} className="flex gap-2">
              <p className="text-2xl">&#8226;</p>
              <div className="pt-[7px] text-sm md:text-base">
                <p>{item.date}</p>
                <p className="font-semibold">{item.jabatan}</p>
                {item.bidang && <p>Bidang / Bagian : {item.bidang}</p>}
                <p>SKPD : {item.skpd}</p>
              </div>
            </div>
          ))}

          <Separator />

          <div>
            <h3 className="font-semibold">Latar Belakang Pendidikan</h3>
            <div className="mt-3 grid grid-cols-2">
              <div>
                <h4 className="font-semibold">- Riwayat Pendidikan Formal</h4>
                {PENDIDIKAN_FORMAL.map((item, index) => (
                  <div key={index} className="flex gap-2 text-sm md:text-base">
                    <p className="text-2xl">&#8226;</p>
                    <div className="pt-[7px]">
                      <p className="font-semibold">{item.date}</p>
                      <p className="font-semibold">{item.pendidikan}</p>
                      <p>{item.jurusan}</p>
                      {item.keterangan && (
                        <p className="italic">Ket : {item.keterangan}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold">- Pendidikan Informal</h4>
                {PENDIDIKAN_INFORMAL.map((item, index) => (
                  <div key={index} className="flex gap-2 text-sm md:text-base">
                    <p className="text-2xl">&#8226;</p>
                    <div className="pt-[7px]">
                      {item.date && (
                        <p className="font-semibold">{item.date}</p>
                      )}
                      <p className="font-semibold">{item.pendidikan}</p>
                      {item.lokasi && <p>{item.lokasi}</p>}
                      {item.keterangan && (
                        <p className="italic">Ket : {item.keterangan}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-950">
          Pejabat Struktural Dinas
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Satuan/Unit Kerja</TableHead>
              <TableHead>Jabatan</TableHead>
              <TableHead className="text-right">Golongan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DAFTAR_PEJABAT.map((item, index) => (
              <TableRow key={index} className="text-sm md:text-base">
                <TableCell className="font-medium">{item.nama}</TableCell>
                <TableCell>{item.satuankerja}</TableCell>
                <TableCell>{item.jabatan}</TableCell>
                <TableCell className="text-right">{item.golongan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </aside>
  );
};

export default ProfilePejabatStruktural;
