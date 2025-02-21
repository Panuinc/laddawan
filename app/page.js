"use client"; // ใช้ client component เพื่อให้ Swiper ทำงานได้

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-b-2 border-dark">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
          Ladawan By Channakor
        </div>
        <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-lg font-[600]">
          <Image
            src="/images/icons/icons-1.png"
            width={20}
            height={100}
            alt="icons-1.png"
            priority={true}
            className=""
          />
          Contact : 089 699 5678
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-b-2 border-dark text-lg font-[600]">
            บ้านเดี่ยวหรู ในหมู่บ้าน ลดาวัลย์ ซอยงามวงศ์วาน 47 แยก 39 ใกล้
            มหาวิทยาลัย ธุรกิจบัณฑิตย์
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-start w-10/12 h-full p-2 gap-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000 }}
            className="w-10/12 h-auto"
          >
            <SwiperSlide>
              <Image
                src="/images/exterior/exterior-1.jpg"
                width={980}
                height={100}
                alt="exterior-1.jpg"
                priority={true}
                className="rounded-[50px] w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/exterior/exterior-2.jpg"
                width={980}
                height={100}
                alt="exterior-2.jpg"
                priority={true}
                className="rounded-[50px] w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/exterior/exterior-3.jpg"
                width={980}
                height={100}
                alt="exterior-3.jpg"
                priority={true}
                className="rounded-[50px] w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-b-2 border-dark text-lg font-[600]">
              บ้านเดี่ยวหรู ในหมู่บ้าน ลดาวัลย์ ซอยงามวงศ์วาน 47 แยก 39 ใกล้
              มหาวิทยาลัย ธุรกิจบัณฑิตย์
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-9/12 h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              3 ห้องนอน
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              5 ห้องน้ำ
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-9/12  h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            1 ห้องนอนแม่บ้าน
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            1 ห้องน้ำแม่บ้านครับ
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-b-2 border-dark text-lg font-[600]">
              พื้นที่ใช้สอยภายในบ้าน 324 ตร.ม.
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-9/12  h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            แบ่งเป็นชั้น 1 199 ตร.ม.
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            ชั้น 2 125 ตร.ม.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-b-2 border-dark text-lg font-[600]">
              พื้นที่ใช้สอยภายนอก 203 ตร.ม.
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-9/12  h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            ระเบียงด้านหลัง 11 ตร.ม.
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            ลานซักล้างข้างบ้าน 37 ตร.ม.
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            ระเบียงข้างบ้าน โรงจอดรถและถนนภายใน 155 ตร.ม
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600]">
              ภายนอก
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Image
              src="/images/exterior/exterior-2.jpg"
              width={500}
              height={100}
              alt="exterior-2.jpg"
              priority={true}
              className="rounded-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-start justify- w-full h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Image
              src="/images/interior/interior-2.jpg"
              width={500}
              height={100}
              alt="interior-2.jpg"
              priority={true}
              className="rounded-[50px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600]">
              ภายใน
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end w-10/12 h-full p-2 gap-2">
          <Image
            src="/images/exterior/exterior-3.jpg"
            width={980}
            height={100}
            alt="exterior-3.jpg"
            priority={true}
            className="rounded-[50px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 text-lg font-[600]">
              Google Map
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.568765481971!2d100.553008!3d13.8671443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d89b6f6da29%3A0x908e1b1589d38a1a!2z4Lia4Lij4Li04Lip4Lix4LiH4Liy4LiZ4LmB4LilIOC4quC5ieC4i-C4o-C4sOC4iuC5gOC4reC5hOC5guC5geC4nuC4o-C4sOC4lOC5hOC4muC4l-C5jOC4iuC4seC4meC5jA!5e0!3m2!1sth!2sth!4v1708390741223"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[50px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
