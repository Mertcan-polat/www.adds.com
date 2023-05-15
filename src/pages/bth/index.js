import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import bth from "../images/bth.svg";
import Image from "next/image";
import Link from "next/link";
import tr from "../../../locales/tr";
import en from "../../../locales/en";
import nl from "../../../locales/nl";
import it from "../../../locales/it";
import de from "../../../locales/de";

const index = () => {
  const router = useRouter();

  const { locale, locales } = router;

  const t =
    locale === "tr"
      ? tr
      : locale === "it"
      ? it
      : locale === "nl"
      ? nl
      : locale === "de"
      ? de
      : en;

  const isActivePage = (pathname) => {
    return router.pathname === pathname
      ? "text-white"
      : "text-white opacity-60";
  };
  return (
    <div>
      <Navbar />

      <div className="relative">
        <Image src={bth} alt="Picture of the author" className="w-full" />
        <div class="absolute md:flex md:justify-around flex flex-row bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 w-auto">
          <Link
            href="/about"
            className={`${isActivePage("/about")}  hidden md:inline-block`}
          >
            {t.home.subTitle}
          </Link>
          <Link
            href="/misyon"
            className={`${isActivePage("/misyon")} hidden md:inline-block`}
          >
            {t.home.subTitle1}
          </Link>
          {/* <Link
            href="/referans"
            className={`${isActivePage("/referans")} hidden md:inline-block`}
          >
            Referanslar
          </Link> */}
          <Link
            href="/bth"
            className={`${isActivePage("/bth")} mx-auto md:mx-0`}
          >
            {t.home.subTitle3}
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-3">
        <div>
          <span className="font-bold">Şirket Türü:</span> A.Ş. <br />
          <span className="font-bold">Mersis:</span>
          0008-1366-8600-0001 <br />
          <span className="font-bold">Ticaret Sicil Memurluğu:</span>
          İstanbul
          <br />
          <span className="font-bold">Ticaret Ünvanı: </span>
          ADSS ALÜMİNYUM METAL SANAYİ VE TİCARET LİMİTED ŞİRKETİ
          <br />
          <span className="font-bold">Adres:</span>
          Esenyalı Mah. Yanyol Cad. Varyap Plaza Blok No:61/113 Pendik <br />
          <span className="font-bold"> Taahüt Edilen Sermaye Miktarı:</span>
          <br />
          <span className="font-bold">Ödenen Sermaye Miktarı:</span>
          <br />
          <span className="font-bold">Kayıtlı Sermaye Tavanı:</span>
          <br />
          <span className="font-bold">Şirket Tescil Tarihi:</span>
          21.05.2018
          <br />
          <span className="font-bold">Vergi Dairesi:</span>
          TUZLA VERGİ DAİRESİ
          <br />
          <span className="font-bold mb-">Sektör:</span>
          Demir dışı metal cevherleri ve konsantrelerinin toptan ticareti
          (uranyum ve toryum cevherleri ile değerli metal cevherleri hariç)
          <br />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
