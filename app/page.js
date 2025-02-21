"use client";
import React from "react";
import { BathRoom, BedRoom, Home, Phone } from "@/components/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const galleryImages = [
  { src: "/images/exterior/exterior-1.jpg", alt: "exterior-1" },
  { src: "/images/exterior/exterior-2.jpg", alt: "exterior-2" },
  { src: "/images/exterior/exterior-3.jpg", alt: "exterior-3" },
  { src: "/images/interior/interior-1.jpg", alt: "interior-1" },
  { src: "/images/interior/interior-2.jpg", alt: "interior-2" },
  { src: "/images/interior/interior-3.jpg", alt: "interior-3" },
  { src: "/images/interior/interior-4.jpg", alt: "interior-4" },
  { src: "/images/interior/interior-5.jpg", alt: "interior-5" },

];

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Home /> Home Renovate By Channakorn
        </div>
        <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Phone /> 089 699 5678
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Lorem Ipsum
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            What is Lorem Ipsum?
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Image
            src="/images/exterior/exterior-1.jpg"
            alt="exterior-1.jpg"
            priority={true}
            width={500}
            height={500}
            className="w-full h-full p-2 border-2 border-dark border-dashed rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] inner_shadow_default"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Image
            src="/images/exterior/exterior-2.jpg"
            alt="exterior-2.jpg"
            priority={true}
            width={300}
            height={500}
            className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[0px] rounded-br-[100px] inner_shadow_default"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Lorem Ipsum
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          Facilities
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <Image
                src="/images/icons/icons-3.png"
                alt="icons-3.png"
                priority={true}
                width={500}
                height={500}
                className="w-40 h-40 p-2 border-2 border-dark border-dashed rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] inner_shadow_default"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Swimming Pool
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <Image
                src="/images/icons/icons-1.png"
                alt="icons-1.png"
                priority={true}
                width={500}
                height={500}
                className="w-40 h-40 p-2 border-2 border-dark border-dashed rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] inner_shadow_default"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Park
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <Image
                src="/images/icons/icons-2.png"
                alt="icons-2.png"
                priority={true}
                width={500}
                height={500}
                className="w-40 h-40 p-2 border-2 border-dark border-dashed rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] inner_shadow_default"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Fitness
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          Text Header
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Img Left Top
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Text Left Under
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Img center Top
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Text center Under
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Img Right Top
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Text Right Under
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Exterior
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Image
            src="/images/exterior/exterior-1.jpg"
            alt="exterior-1.jpg"
            priority={true}
            width={500}
            height={500}
            className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] inner_shadow_default"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Image
            src="/images/interior/interior-1.jpg"
            alt="interior-1.jpg"
            priority={true}
            width={500}
            height={500}
            className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] inner_shadow_default"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Interior
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          For Plan
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                Detail
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <BedRoom /> 3 ห้องนอน
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <BathRoom /> 5 ห้องน้ำ
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <BedRoom /> 1 ห้องนอนแม่บ้าน
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <BathRoom /> 1 ห้องน้ำแม่บ้าน
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                พื้นที่ใช้สอยภายนอก 203 ตร.ม. แบ่งเป็นระเบียงด้านหลังประมาณ 11
                ตร.ม. ลานซักล้างข้างบ้านประมาณ 37 ตร.ม. และระเบียงข้างบ้าน
                โรงจอดรถและถนนภายในประมาณ 155 ตร.ม
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                พื้นที่ใช้สอยภายในบ้าน 324 ตร.ม.
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <Image
                  src="/images/plan/plan-1.jpg"
                  alt="plan-1.jpg"
                  priority={true}
                  width={500}
                  height={500}
                  className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] inner_shadow_default"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                  For Plan 1
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                  For Plan 2
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
                <Image
                  src="/images/plan/plan-2.jpg"
                  alt="plan-2.jpg"
                  priority={true}
                  width={500}
                  height={500}
                  className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] inner_shadow_default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          Lorem Ipsum is simply
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          Gallery
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-red-500 border-dashed">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={3}
            coverflowEffect={{ rotate: 0, depth: 100, slideShadows: true }}
            autoplay={{ delay: 5000 }}
            className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed overflow-auto"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  width={980}
                  height={100}
                  alt={image.alt}
                  priority
                  className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            บ้านเดี่ยวหรู ในหมู่บ้าน ลดาวัลย์
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              Location
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              ซอยงามวงศ์วาน 47 แยก 39 ใกล้ มหาวิทยาลัย ธุรกิจบัณฑิตย์
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              <Phone /> Contact
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              089 699 5678
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              ID Line
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
              089 699 5678
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.568765481971!2d100.553008!3d13.8671443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d89b6f6da29%3A0x908e1b1589d38a1a!2z4Lia4Lij4Li04Lip4Lix4LiH4Liy4LiZ4LmB4LilIOC4quC5ieC4i-C4o-C4sOC4iuC5gOC4reC5hOC5guC5geC4nuC4o-C4sOC4lOC5hOC4muC4l-C5jOC4iuC4seC4meC5jA!5e0!3m2!1sth!2sth!4v1708390741223"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="p-2 gap-2 inner_shadow_default rounded-[50px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
