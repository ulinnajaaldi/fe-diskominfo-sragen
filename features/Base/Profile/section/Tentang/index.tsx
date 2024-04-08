import React from "react";

const Tentang = () => {
  const PARAGRAF = [
    "Dinas Komunikasi, Informatika dan Statistik Pemerintah Provinsi DKI Jakarta merupakan penyelenggara urusan pemerintahan dan mempunyai tugas di bidang Komunikasi dan Informatika, Statistik dan Persandian.",
    "Dinas Komunikasi, Informatika dan Statistik Pemerintah Provinsi DKI Jakarta dipimpin oleh seorang Kepala Dinas yang berkedudukan di bawah dan bertanggung jawab kepada Gubernur melalui Sekretaris Daerah.",
  ];

  return (
    <aside className="space-y-4">
      <h1 className="text-4xl font-bold text-blue-950">Tentang</h1>
      <div className="space-y-2">
        {PARAGRAF.map((paragraf, index) => (
          <p key={index} className="text-justify">
            {paragraf}
          </p>
        ))}
      </div>
    </aside>
  );
};

export default Tentang;
