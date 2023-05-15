import React from "react";
import Header from "../images/header.svg";
import Image from "next/image";
import HeroSection from "./heroSection";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import tr from "../../../locales/tr";
import en from "../../../locales/en";
import nl from "../../../locales/nl";
import it from "../../../locales/it";
import de from "../../../locales/de";

const content = () => {
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

  return (
    <div>
      <Image
        src={Header}
        alt="Picture of the author"
        height={832}
        className="w-full z-0 relative"
      />
      <div className="absolute top-[10%] md:top-[22%] lg:top-[40%] ml-12">
        <h1 className="font-bold md:text-xl lg:text-2xl mt-3">
          {t.home.description}{" "}
        </h1>
        <h5 className="mt-4">{t.home.descriptionLong}</h5>
        <div className="flex md:font-semibold mt-5">
          {t.home.desBtn} <BsArrowRight className=" mt-[7px] ml-2" />
        </div>
      </div>

      <HeroSection />
    </div>
  );
};

export default content;
