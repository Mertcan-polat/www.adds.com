import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import Kurulsal from "../images/kurulsal.svg";
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
        <div className="aspect-w-16 aspect-h-9">
          {" "}
          <Image
            src={Kurulsal}
            alt="Picture of the author"
            className="md:w-full w-auto md:h-auto h-[235px]"
          />
        </div>
        <div class="absolute md:flex md:justify-between flex flex-row bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 w-full">
          <Link
            href="/about"
            className={`${isActivePage("/about")} mx-auto md:mx-0 pl-3`}
          >
            {t.home.subTitle}
          </Link>
          <Link
            href="/about/misyon"
            className={`${isActivePage(
              "/about/misyon"
            )} hidden md:inline-block`}
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
            href="/about/bth"
            className={`${isActivePage(
              "/about/bth"
            )} hidden md:inline-block pr-3`}
          >
            {t.home.subTitle8}
          </Link>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="font-extrabold p-3 ml-14 text-2xl mt-4">
          {t.home.subTitle}
        </h1>
        <p className="mb-5 p-3  ml-14 mr-10">{t.about.description}</p>
      </div>

      <Footer />
    </div>
  );
};

export default index;
