import React from "react";

const VisiMisi = () => {
  const MISI = [
    "Mewujudkan keberadaban, keadilan dan kesejahteraan bagi semua.",
    "Meningkatkan kualitas hidup warga Jakarta melalui pelayanan publik yang berkualitas, berkeadilan dan berkeberlanjutan.",
    "Meningkatkan kualitas lingkungan hidup dan ketersediaan ruang terbuka hijau.",
    "Meningkatkan kualitas pendidikan, kesehatan, dan pelayanan sosial.",
    "Meningkatkan kualitas pelayanan transportasi dan infrastruktur.",
    "Meningkatkan kualitas pelayanan keamanan dan ketertiban umum.",
    "Mewujudkan keberadaban, keadilan dan kesejahteraan bagi semua.",
    "Meningkatkan kualitas hidup warga Jakarta melalui pelayanan publik yang berkualitas, berkeadilan dan berkeberlanjutan.",
    "Meningkatkan kualitas lingkungan hidup dan ketersediaan ruang terbuka hijau.",
    "Meningkatkan kualitas pendidikan, kesehatan, dan pelayanan sosial.",
    "Meningkatkan kualitas pelayanan transportasi dan infrastruktur.",
    "Meningkatkan kualitas pelayanan keamanan dan ketertiban umum.",
    "Mewujudkan keberadaban, keadilan dan kesejahteraan bagi semua.",
    "Meningkatkan kualitas hidup warga Jakarta melalui pelayanan publik yang berkualitas, berkeadilan dan berkeberlanjutan.",
    "Meningkatkan kualitas lingkungan hidup dan ketersediaan ruang terbuka hijau.",
    "Meningkatkan kualitas pendidikan, kesehatan, dan pelayanan sosial.",
    "Meningkatkan kualitas pelayanan transportasi dan infrastruktur.",
    "Meningkatkan kualitas pelayanan keamanan dan ketertiban umum.",
  ];

  return (
    <aside className="space-y-4">
      <h1 className="text-4xl font-bold text-blue-950">VISI MISI</h1>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-950">Visi</h2>
        <p className="text-justify">
          Jakarta kota maju, lestari dan berbudaya yang warganya terlibat dalam
          mewujudkan keberadaban, keadilan dan kesejahteraan bagi semua.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-blue-950">Misi</h2>
        <ul className="ml-5 list-disc break-inside-auto space-y-1">
          {MISI.map((misi, index) => (
            <li key={index}>{misi}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default VisiMisi;
