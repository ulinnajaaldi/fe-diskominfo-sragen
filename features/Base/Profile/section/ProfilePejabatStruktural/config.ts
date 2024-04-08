interface DataPimpinan {
  question: string;
  answer: string;
}

interface PerjalananKarir {
  date: string;
  jabatan: string;
  skpd?: string;
  bidang?: string;
}

interface PendidikanFormal {
  date: string;
  pendidikan: string;
  jurusan: string;
  keterangan?: string;
}

interface PendidikanInformal {
  date?: string;
  pendidikan: string;
  lokasi?: string;
  keterangan?: string;
}

interface DaftarPejabat {
  nama: string;
  satuankerja: string;
  jabatan: string;
  golongan: string;
}

export const dataPimpinan: DataPimpinan[] = [
  {
    question: "Nama Lengkap",
    answer: "Atika Nur Rahmania, S.IP, M.Si",
  },
  {
    question: "Tempat, Tanggal Lahir",
    answer: "Bandung, 22 Agustus 1988",
  },
  {
    question: "Agama",
    answer: "Islam",
  },
  {
    question: "Alamat Kantor",
    answer: "Jl. Raya Soreang KM. 20, Kec. Soreang, Kab. Bandung",
  },
  {
    question: "Jabatan Sekarang",
    answer: "Kepala Dinas Komunikasi dan Informatika Kabupaten Bandung",
  },
];

export const PERJALANAN_KARIR: PerjalananKarir[] = [
  {
    date: "Januari 2019 s/d Sekarang",
    jabatan: "Kepala Dinas Komunikasi, Informatika dan Statistik",
    skpd: "Dinas Komunikasi, Informatika dan Statistik",
  },
  {
    date: "Oktober 2018 s/d Desember 2018",
    bidang: "Bidang Komunikasi Publik",
    jabatan:
      "Kepala Bidang Komunikasi Publik merangkap Kepala Dinas Komunikasi, Informatika dan Statistik",
    skpd: "Dinas Komunikasi, Informatika dan Statistik",
  },
];

export const PENDIDIKAN_FORMAL: PendidikanFormal[] = [
  {
    date: "2000 – 2002",
    pendidikan: "S2 Pascasarjana Universitas Indonesia",
    jurusan: "Manajemen Pembangunan",
    keterangan: "Tugas Belajar",
  },
  {
    date: "1990 – 1995",
    pendidikan: "Universitas Indonesia",
    jurusan: "Komunikasi",
  },
];

export const PENDIDIKAN_INFORMAL: PendidikanInformal[] = [
  {
    date: "2017",
    pendidikan: "IDEAS MIT Leadership Program",
    lokasi: "Boston",
    keterangan: "Scholarship / Beasiswa",
  },
  {
    pendidikan: "Diklat Penjenjangan",
  },
  {
    date: "2016",
    pendidikan: "DIKLAT PIM Tingkat III",
    lokasi: "Jakarta",
    keterangan: "Lulus",
  },
];

export const DAFTAR_PEJABAT: DaftarPejabat[] = [
  {
    nama: "NETTI HERAWATI",
    satuankerja: "DINAS KOMUNIKASI, INFORMATIKA DAN STATISTIK",
    jabatan: "SEKRETARIS",
    golongan: "IV/A",
  },
  {
    nama: "NETTI HERAWATI",
    satuankerja: "DINAS KOMUNIKASI, INFORMATIKA DAN STATISTIK",
    jabatan: "SEKRETARIS",
    golongan: "IV/A",
  },
  {
    nama: "NETTI HERAWATI",
    satuankerja: "DINAS KOMUNIKASI, INFORMATIKA DAN STATISTIK",
    jabatan: "SEKRETARIS",
    golongan: "IV/A",
  },
];
