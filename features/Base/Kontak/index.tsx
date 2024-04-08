import React from "react";
import PageWrapper from "@/components/common/page-wrapper";

const KontakFeature = () => {
  const items = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Kontak",
    },
  ];

  return (
    <PageWrapper items={items}>
      <section className="xs:pt-20 container relative pt-14">
        <h1 className="text-2xl font-bold text-blue-950">Hubungi Kami</h1>
        <div className="mt-5 grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-blue-950">Lokasi</h2>
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=diskominfo+sragen&t=&z=16&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-950">Kontak</h2>
            <form className="space-y-3">
              <div>
                <label htmlFor="name" className="font-semibold">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold">
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-gray-300 p-2"
                ></textarea>
              </div>
              <button className="w-full rounded-md bg-blue-950 p-2 text-white">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default KontakFeature;
