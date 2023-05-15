import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Vector from "../images/Vector.svg";
import Image from "next/image";
import tr from "../../../locales/tr";
import en from "../../../locales/en";
import nl from "../../../locales/nl";
import it from "../../../locales/it";
import de from "../../../locales/de";
import Phone from "../images/phone.svg";
import HomeIc from "../images/HomeIc.svg";
import { useRouter } from "next/router";
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
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-20">
        <div className="flex flex-col">
          <div>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.6616925975313!2d29.28679107596802!3d40.85735087137208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc6600374d2f%3A0xfa73021e09381df5!2sVaryap%20Plaza!5e0!3m2!1str!2str!4v1683793140537!5m2!1str!2str"
                className="rounded-lg mt-24 ml-10 float-right"
                width={800}
                height={450}
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="">
            <ul class="text-gray-500 font-small  ml-10 mt-10 mb-28">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline flex  items-start text-start justify-start"
                >
                  {" "}
                  <Image
                    src={HomeIc}
                    alt="Picture of the author"
                    className="flex mr-3 mt-2"
                  />
                  Varyap Plaza Esenyalı Mah. Yanyol Cad. No:61/113 3899
                  Pendik/İSTANBUL
                </a>
              </li>
              <li class="mb-4">
                <i class="fa fa-phone text-amber-900 text-xl"></i>
                <a href="#" class="hover:underline flex">
                  <Image
                    src={Phone}
                    alt="Picture of the author"
                    className="flex mr-3"
                  />{" "}
                  0216 706 AD SS (23 77)
                </a>
              </li>
              <li class="mb-4">
                <i class="fa fa-envelope text-amber-900 text-xl"></i>
                <a href="#" class="hover:underline flex">
                  <Image
                    src={Vector}
                    alt="Picture of the author"
                    className="flex mr-3"
                  />{" "}
                  info@adss.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mt-40 mb-14">{t.home.subTitle6}</h2>
          <form>
            <div className="md:min-w-[400px] sm:w-full">
              <div className="mb-6">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Ad/Soyad"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Konu..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-amber-900 hover:bg-amber-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center float-right mt-6"
              >
                {t.home.subTitle7}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
