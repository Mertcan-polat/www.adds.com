import React from "react";
import Image from "next/image";
import mgFirst from "../images/mgFirst.svg";
import albillet from "../images/albillet.svg";
import kureal from "../images/kureal.svg";
import mgkul from "../images/mgkul.svg";
import office from "../images/office.svg";
import tr from "../../../locales/tr";
import en from "../../../locales/en";
import nl from "../../../locales/nl";
import it from "../../../locales/it";
import de from "../../../locales/de";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const HeroSection = () => {
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
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-5 p-10 gap-y-3 ">
        <div className="bg-gray-200 rounded-md p-4">
          <Image
            src={mgFirst}
            alt="Picture of the author"
            height={150}
            className="w-full z-0 relative"
          />
          <span className="inline-block font-bold mt-2 mb-5">
            {t.home.card1}
          </span>
          <p className="mb-7">{t.home.card1Desc}</p>
          <Link
            href="/products"
            className="text-[#972119] flex justify-end text-end"
          >
            {t.home.btnMore}{" "}
            <BsArrowRight className="text-[#972119] mt-[7px] ml-2" />
          </Link>
        </div>
        <div className="bg-gray-200 rounded-md p-4">
          <Image
            src={albillet}
            alt="Picture of the author"
            height={150}
            className="w-full z-0 relative"
          />
          <span className="inline-block font-bold mt-2 mb-5">
            {t.home.card2}
          </span>
          <p className="mb-5">{t.home.card2Desc}</p>
          <Link
            href="/al-billet"
            className="text-[#972119] flex justify-end items-end"
          >
            {t.home.btnMore}{" "}
            <BsArrowRight className="text-[#972119] mt-[7px] ml-2" />
          </Link>
        </div>{" "}
        <div className="bg-gray-200 rounded-md p-4">
          <Image
            src={mgkul}
            alt="Picture of the author"
            height={150}
            className="w-full z-0 relative"
          />
          <span className="inline-block font-bold mt-2 mb-5">
            {t.home.card3}
          </span>
          <p className="mb-5">{t.home.card3Desc}</p>
          <Link
            href="/al-ingot"
            className="text-[#972119] flex justify-end items-end text-end"
          >
            {t.home.btnMore}{" "}
            <BsArrowRight className="text-[#972119] mt-[7px] ml-2" />
          </Link>
        </div>{" "}
        <div className="bg-gray-200 rounded-md p-4">
          <Image
            src={kureal}
            alt="Picture of the author"
            height={150}
            className="w-full z-0 relative"
          />
          <span className="inline-block font-bold mt-2 mb-5">
            {t.home.card4}
          </span>
          <p className="mb-5">{t.home.card4Desc}</p>
          <Link
            href="/alhemisphere"
            className="text-[#972119] flex justify-end text-end"
          >
            {t.home.btnMore}{" "}
            <BsArrowRight className="text-[#972119] mt-[7px] ml-2" />
          </Link>
        </div>
      </div>
      <div className="relative p-10">
        <div className="relative h-96">
          <Image
            src={office}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full"
          />

          <div className="absolute w-1/2 md:flex md:justify-between flex flex-row h-3/5 md:h-72 bottom-10 opacity-80 rounded-md ml-5 left-0 right-0 overflow-hidden px-4 py-2 bg-[#242965] ">
            <div className="rounded-md bg-transparent p-5 text-white h-full">
              <h3 className="text-xl font-bold">{t.home.subTitle}</h3>
              <span className="md:inline-block text-xs font-light h-1 ">
                {t.home.cardBig}
                <div className="cursor-pointer flex text-end justify-end mt-5">
                  {t.home.btnMore}{" "}
                  <BsArrowRight className="text-[#ffffff] mt-[3px] ml-2" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
