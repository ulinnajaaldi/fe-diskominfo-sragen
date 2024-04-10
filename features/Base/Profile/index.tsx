"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/common/page-wrapper";
import {
  ProfilePejabatStukturalFeature,
  Tentang,
  TugasFungsi,
  VisiMisi,
} from "./section";

const ProfileFeature = () => {
  const [activeTab, setActiveTab] = useState("tentang");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const items = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Profile",
    },
  ];

  return (
    <PageWrapper items={items}>
      <section className="xs:pt-20 container relative grid grid-cols-1 gap-10 pt-14 md:grid-cols-12">
        <div className="col-span-1 flex flex-row flex-wrap gap-2 md:col-span-3 md:flex-col md:gap-5">
          <Button
            onClick={() => handleTabChange("tentang")}
            size="lg"
            variant={activeTab === "tentang" ? "secondary" : "outline"}
          >
            Tentang
          </Button>
          <Button
            onClick={() => handleTabChange("visi-misi")}
            size="lg"
            variant={activeTab === "visi-misi" ? "secondary" : "outline"}
          >
            Visi Misi
          </Button>
          <Button
            onClick={() => handleTabChange("tugas-fungsi")}
            size="lg"
            variant={activeTab === "tugas-fungsi" ? "secondary" : "outline"}
          >
            Tugas Dan Fungsi
          </Button>
          <Button
            onClick={() => handleTabChange("pejabat-struktural")}
            size="lg"
            variant={
              activeTab === "pejabat-struktural" ? "secondary" : "outline"
            }
          >
            Pejabat Struktural
          </Button>
        </div>
        <div className="col-span-1 md:col-span-9">
          {activeTab === "tentang" && <Tentang />}
          {activeTab === "visi-misi" && <VisiMisi />}
          {activeTab === "tugas-fungsi" && <TugasFungsi />}
          {activeTab === "pejabat-struktural" && (
            <ProfilePejabatStukturalFeature />
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProfileFeature;
