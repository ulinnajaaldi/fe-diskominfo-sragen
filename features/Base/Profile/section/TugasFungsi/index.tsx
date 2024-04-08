import React from "react";

const TugasFungsi = () => {
  const MISI = [
    "penyusunan Rencana Strategis, Rencana Kerja dan Rencana Kerja dan Anggaran Dinas;",
    "pelaksanaan Dokumen Pelaksanaan Anggaran Dinas;",
    "perumusan kebijakan, proses bisnis, standar dan prosedur Dinas;",
    "pelaksanaan kebijakan, proses bisnis, standar dan prosedur Dinas;",
    "pengelolaan opmi dan aspirasi publik;",
    "pengelolaan dan pelayanan informasi publik;",
    "penyediaan konten lintas sektoral dan pengelolaan media komunikasi publik;",
    "pengelolaan komunikasi publik;",
    "penyelenggaraan manajemen komunikasi krisis",
    "penyelenggaraan pemantauan informasi dan penetapan agenda prioritas komunikasi Pemerintah Provinsi DKI Jakarta;",
    "pelaksanaan layanan hubungan media;",
    "penyelenggaraan pusat data daerah;",
    "penyelenggaraan layanan keamanan informasi;",
    "penyelenggaraan layanan Siber dan Sandi;",
    "penyelenggaraan sistem jaringan intra Pemerintah Provinsi DKI Jakarta;",
    "penyelenggaraan sistem komunikasi intra Pemerintah Provinsi DKI Jakarta;",
    "penyelenggaraan layanan aplikasi dan proses bisnis pemerintahan berbasis elektronik;",
    "penyelenggaraan rencana induk dan anggaran pemerintahan berbasis elektronik;",
    "pengembangan sumber daya Teknologi Informasi dan Komunikasi Pemerintah Provinsi DKI Jakarta dan masyarakat;",
    "penyelenggaraan ekosistem Provinsi cerdas dan kota cerdas;",
    "pelaksanaan layanan nama domain dan sub domain bagi PD/lembaga Non PD;",
    "pelaksanaan Govemment Chief Information Officer (GCIO);",
    "penyelenggaraan sistem penghubung layanan pemerintah;",
    "penyelenggaraan layanan data dan informasi elektronik;",
    "penetapan standarisasi layanan sistem pemerintahan berbasis elektronik;",
    "pengoordinasian pelaksanaan statistik sektoral;",
    "penyelenggaraan statistik Pemerintah Provinsi DKI Jakarta;",
    "penyelenggaraan dukungan administratif, keuangan dan tata kelola komisi informasi di Provinsi DKI Jakarta;",
    "pelaksanaan kesekretariatan Dinas;",
    "pelaksanaan koordinasi, pemantauan, evaluasi, pelaporan dan pertanggungjawaban pelaksanaan tugas Dinas; dan",
    "pelaksanaan tugas kedinasan lain yang diberikan oleh Gubernur.",
  ];

  return (
    <aside className="space-y-4">
      <h1 className="text-4xl font-bold text-blue-950">Tugas dan Fungsi</h1>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-950">Tugas</h2>
        <p className="text-justify">
          Menyelenggarakan urusan pemerintahan bidang komunikasi dan
          informatika, urusan pemerintahan bidang statistik dan urusan
          pemerintahan bidang persandian.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-950">Fungsi</h2>
        <p className="text-justify">
          Dalam melaksanakan tugas sebagaimana dimaksud dalam Pasal 4, Dinas
          mempunyai fungsi:
        </p>
        <ul className="ml-10 list-decimal space-y-1">
          {MISI.map((misi, index) => (
            <li key={index}>{misi}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default TugasFungsi;
