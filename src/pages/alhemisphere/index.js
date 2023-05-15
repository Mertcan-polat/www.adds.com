import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import Half from "../images/halfal.svg";
import Table from "../images/table1.svg";

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
        <Image src={Half} alt="Picture of the author" className="w-full" />
        <div class="absolute md:flex md:justify-around flex flex-row bottom-0 left-0 right-0 px-4 py-2 bg-[#972119] opacity-70 w-auto">
          <Link
            href="/products"
            className={`${isActivePage("/products")} hidden md:inline-block`}
          >
            {t.home.card1}
          </Link>
          <Link
            href="/al-billet"
            className={`${isActivePage("/al-billet")} hidden md:inline-block`}
          >
            {t.home.card2}
          </Link>
          <Link
            href="/al-ingot"
            className={`${isActivePage("/al-ingot")} hidden md:inline-block`}
          >
            {t.home.card3}
          </Link>
          <Link
            href="/alhemisphere"
            className={`${isActivePage("/alhemisphere")}  mx-auto md:mx-0`}
          >
            {t.home.card4}
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="font-extrabold p-3 ml-14 text-2xl mt-4">
          {t.home.card4}
        </h1>
        <p className="mb-52 p-3  ml-14 mr-10">{t.home.card4DescLong}</p>
      </div>

      <Footer />
    </div>
  );
};

export default index;
