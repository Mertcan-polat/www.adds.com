import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import Referans from "../images/referans.svg";
import Image from "next/image";
import Link from "next/link";
import { I18nextProvider } from "react-i18next";
import { i18n } from "../../../next.config";
const index = () => {
  const [language, setLanguage] = useState("tr");
  const { t } = useTranslation("index");
  const router = useRouter();
  const isActivePage = (pathname) => {
    return router.pathname === pathname
      ? "text-white"
      : "text-white opacity-60";
  };

  function handleLanguageChange(selectedLanguage) {
    setLanguage(selectedLanguage);
  }

  return (
    <div>
      <Navbar />

      <div className="relative">
        <Image src={Referans} alt="Picture of the author" className="w-full" />
        <div class="absolute md:flex md:justify-between flex flex-row bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 w-auto">
          <Link
            href="/about"
            className={`${isActivePage("/about")}  md:inline-block`}
          >
            Adds Hakkında
          </Link>
          <Link
            href="/misyon"
            className={`${isActivePage("/misyon")}  md:inline-block`}
          >
            Misyon / Vizyon
          </Link>
          {/* <Link
            href="/referans"
            className={`${isActivePage("/referans")}  mx-auto md:mx-0`}
          >
            Referanslar
          </Link> */}
          <Link
            href="/bth"
            className={`${isActivePage("/bth")}  md:inline-block`}
          >
            Bilgi Toplumu Hizmetleri
          </Link>
        </div>
      </div>
      <I18nextProvider i18n={i18n}>
        <div className="container mx-auto mt-8 p-3">
          <div>{t("description")}</div>
          <div>
            <button onClick={() => handleLanguageChange("en")}>English</button>
            <button onClick={() => handleLanguageChange("tr")}>Türkçe</button>
          </div>
        </div>
      </I18nextProvider>

      <Footer />
    </div>
  );
};

export default index;
