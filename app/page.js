"use client";
import React from "react";
import { BathRoom, BedRoom, Home, Phone } from "@/components/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 45,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 5000 }}
            className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed"
          >
            <SwiperSlide>
              <Image
                src="/images/exterior/exterior-1.jpg"
                width={980}
                height={100}
                alt="exterior-1.jpg"
                priority={true}
                className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/exterior/exterior-2.jpg"
                width={980}
                height={100}
                alt="exterior-2.jpg"
                priority={true}
                className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/exterior/exterior-3.jpg"
                width={980}
                height={100}
                alt="exterior-3.jpg"
                priority={true}
                className="w-96 h-full p-2 border-2 border-dark border-dashed rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          text Left
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
          Map
        </div>
      </div>
    </div>
  );
}
