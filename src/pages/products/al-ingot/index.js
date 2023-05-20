import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { useRouter } from "next/router";
import AlIngot from "../../images/alingot.svg";
import Table from "../../images/mgıngıt.png";
import tr from "../../../../locales/tr";
import en from "../../../../locales/en";
import nl from "../../../../locales/nl";
import it from "../../../../locales/it";
import de from "../../../../locales/de";

import Image from "next/image";
import Link from "next/link";
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
        <Image
          src={AlIngot}
          alt="Picture of the author"
          className="md:w-full w-auto md:h-auto h-[235px]"
        />
        <div class="absolute md:flex md:justify-around flex flex-row bottom-0 left-0 right-0 px-4 py-2 bg-[#972119] opacity-70 w-auto">
          <Link
            href="/products"
            className={`${isActivePage("/products")} hidden md:inline-block`}
          >
            {t.home.card1}
          </Link>
          <Link
            href="/products/al-billet"
            className={`${isActivePage(
              "/products/al-billet"
            )} hidden md:inline-block`}
          >
            {t.home.card2}
          </Link>
          <Link
            href="/products/al-ingot"
            className={`${isActivePage("/products/al-ingot")}  mx-auto md:mx-0`}
          >
            {t.home.card3}
          </Link>
          <Link
            href="/products/alhemisphere"
            className={`${isActivePage(
              "/products/alhemisphere"
            )} hidden md:inline-block`}
          >
            {t.home.card4}
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="font-extrabold p-3 ml-12 text-2xl mt-4">
          {t.home.card3}
        </h1>
        <p className="mb-5  ml-14 mr-10">{t.home.card3DescLong}</p>
        <div className="flex mx-auto ml-4 items-center justify-center">
          <Image
            src={Table}
            alt="Picture of the author"
            className="w-fit flex"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
