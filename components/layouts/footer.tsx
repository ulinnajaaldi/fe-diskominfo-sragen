import Image from "next/image";
import React from "react";

const Footer = () => {
  const FOOTER_INFO = [
    "Jl. Raya Sukowati No. 255",
    "Sragen 57211, Jateng, Indonesia",
    "Phone : +62-0271-894001",
    "Fax : +62-0271-891297",
    "E-mail : kominfo@sragenkab.go.id",
  ];

  const FOOTER_LINKS = [
    {
      title: "Kominfo RI",
      href: "https://kominfo.go.id",
    },
    {
      title: "Kominfo Provinsi Jawa Tengah",
      href: "https://kominfo.jatengprov.go.id",
    },
    {
      title: "Pemkab Sragen",
      href: "https://sragenkab.go.id",
    },
    {
      title: "PPID Kabupaten Sragen",
      href: "https://ppid.sragenkab.go.id",
    },
    {
      title: "BLC Sragen",
      href: "https://blc.sragenkab.go.id",
    },
    {
      title: "SPBE Kabupaten Sragen",
      href: "https://spbe.sragenkab.go.id",
    },
  ];

  return (
    <footer className="bg-blue-950">
      <div className="container flex flex-col justify-between gap-10 py-10 md:flex-row md:gap-0">
        <div>
          <Image
            src="/images/logo-kominfo-big.png"
            alt="Diskominfo Sragen"
            width={62}
            height={62}
            className="rounded-full bg-white p-1"
          />
          <h2 className="text-lg text-white">
            Dinas Komunikasi dan Informatika Kabupaten Sragen
          </h2>
          <div className="mt-5 space-y-2 text-sm">
            {FOOTER_INFO.map((info, index) => (
              <p key={index} className="text-white">
                {info}
              </p>
            ))}
          </div>
          <p></p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-white">Link Terkait</h2>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:underline"
              >
                {link.title}
              </a>
            ))}
          </div>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
