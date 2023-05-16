import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import Misyon from "../images/misyon.svg";
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
        <Image src={Misyon} alt="Picture of the author" className="w-full" />
        <div class="absolute md:flex md:justify-between flex flex-row bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 w-auto">
          <Link
            href="/about"
            className={`${isActivePage("/about")} hidden md:inline-block `}
          >
            {t.home.subTitle}
          </Link>
          <Link
            href="/misyon"
            className={`${isActivePage("/misyon")} mx-auto md:mx-0`}
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
            className={`${isActivePage("/bth")} hidden md:inline-block`}
          >
            {t.home.subTitle8}
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="font-extrabold p-3 ml-14 text-2xl mt-4">
          {t.home.vision}
        </h1>
        <p className="mb-12 p-3  ml-14 mr-10">{t.about.vision}</p>
        <h1 className="font-extrabold p-3 ml-14 text-2xl mt-4">
          {t.home.mission}
        </h1>
        <p className="mb-52 ml-14 mr-10 p-3">{t.about.mision}</p>
      </div>

      <Footer />
    </div>
  );
};

export default index;
