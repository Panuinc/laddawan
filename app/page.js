"use client";
import { useEffect, useState } from "react";
import { BathRoom, BedRoom, Home, Phone, Map } from "@/components/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import {
  MapOutlined,
  EditLocationOutlined,
  AddRoadOutlined,
  LocalMallOutlined,
  SchoolOutlined,
  LocalHospitalOutlined,
  DirectionsSubwayFilledOutlined,
} from "@mui/icons-material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Listlocation({ text }) {
  return (
    <div className="flex items-center justify-start w-full h-full xl:w-5/12 p-2 gap-2 text-[#333333] text-md font-[600] hover:text-[#000000]">
      ● {text}
    </div>
  );
}

const galleryImages = [
  { src: "/images/exterior/exterior-1.jpg", alt: "exterior-1" },
  { src: "/images/exterior/exterior-2.jpg", alt: "exterior-2" },
  { src: "/images/exterior/exterior-3.jpg", alt: "exterior-3" },
  // { src: "/images/interior/interior-1.jpg", alt: "interior-1" },
  // { src: "/images/interior/interior-2.jpg", alt: "interior-2" },
  // { src: "/images/interior/interior-3.jpg", alt: "interior-3" },
  // { src: "/images/interior/interior-4.jpg", alt: "interior-4" },
  // { src: "/images/interior/interior-5.jpg", alt: "interior-5" },
];

export default function page() {
  const [activeSection, setActiveSection] = useState("highway");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-b-2 border-dark">
        <div className="flex items-center justify-start w-full h-full p-2 gap-2 font-[600]">
          <Home /> Home Renovate By Channakorn
        </div>
        <div className="flex items-center justify-end w-full h-full p-2 gap-2 font-[600]">
          <Phone /> 089 699 5678
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-2xl font-[600]">
            บ้านเดี่ยวสุดหรู ใจกลางเมือง พื้นที่สอยกว่า 324 ตร.ม
          </div>
          
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/images/exterior/exterior-1.jpg"
            alt="exterior-1.jpg"
            priority={true}
            width={500}
            height={500}
            className="w-full h-full p-2 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-default">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
          Facilities
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full xl:w-6/12  h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-default rounded-[50px]">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Image
                src="/images/icons/icons-3.png"
                alt="icons-3.png"
                priority={true}
                width={500}
                height={500}
                className="w-40 h-40 p-2 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] bg-default"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              Swimming Pool
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-default rounded-[50px]">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Image
                src="/images/icons/icons-1.png"
                alt="icons-1.png"
                priority={true}
                width={500}
                height={500}
                className="w-40 h-40 p-2 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] bg-default"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              Park
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 bg-default rounded-[50px]">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              <Image
                src="/images/icons/icons-2.png"
                alt="icons-2.png"
                priority={true}
                width={500}
                height={500}
                className="w-40 h-40 p-2 rounded-tl-[100px] rounded-bl-[100px] rounded-tr-[100px] rounded-br-[100px] bg-default"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2">
              Fitness
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
            Exterior
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/images/exterior/exterior-1.jpg"
            alt="exterior-1.jpg"
            priority={true}
            width={500}
            height={500}
            className="w-96 h-full p-2 rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px]"
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/images/interior/interior-3.jpg"
            alt="interior-3.jpg"
            priority={true}
            width={500}
            height={500}
            className="w-96 h-full p-2 rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
            Interior
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
          For Plan
        </div>
        <div className="flex flex-col xl:flex-row items-start justify-center w-full h-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full xl:w-4/12 h-full p-2 gap-2">
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600]">
                Detail
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                <BedRoom /> 3 ห้องนอน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                <BathRoom /> 5 ห้องน้ำ
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                <BedRoom /> 1 ห้องนอนแม่บ้าน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                <BathRoom /> 1 ห้องน้ำแม่บ้าน
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                พื้นที่ใช้สอยภายนอก 203 ตร.ม. แบ่งเป็นระเบียงด้านหลังประมาณ 11
                ตร.ม. ลานซักล้างข้างบ้านประมาณ 37 ตร.ม. และระเบียงข้างบ้าน
                โรงจอดรถและถนนภายในประมาณ 155 ตร.ม
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-l-2 border-dark">
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600]">
                พื้นที่ใช้สอยภายในบ้าน 324 ตร.ม.
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                <Image
                  src="/images/plan/plan-1.jpg"
                  alt="plan-1.jpg"
                  priority={true}
                  width={500}
                  height={500}
                  className="w-96 h-full p-2 rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] inner_shadow_default"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-md font-[600] border-b-2 border-dark">
                  For Plan 1
                </div>
                {/* <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div> */}
              </div>
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-md font-[600] border-b-2 border-dark">
                  For Plan 2
                </div>
                {/* <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div> */}
              </div>
              <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                <Image
                  src="/images/plan/plan-2.jpg"
                  alt="plan-2.jpg"
                  priority={true}
                  width={500}
                  height={500}
                  className="w-96 h-full p-2 rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] inner_shadow_default"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-8 gap-2 text-xl font-[600]">
          {" "}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
          Gallery
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={3}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              depth: 100,
              slideShadows: true,
              stretch: 0,
            }}
            autoplay={{ delay: 5000 }}
            className="flex items-center justify-center w-full h-full p-4"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className="">
                <Image
                  src={image.src}
                  width={980}
                  height={100}
                  alt={image.alt}
                  priority
                  className="w-full h-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        <div className="flex flex-col items-center justify-center w-full xl:w-4/12 h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
            บ้านเดี่ยวหรู ในหมู่บ้าน ลดาวัลย์
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              <Map /> Location :
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              ซอยงามวงศ์วาน 47 แยก 39 ใกล้ มหาวิทยาลัย ธุรกิจบัณฑิตย์
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              <Phone /> Contact :
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              089 699 5678
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-end w-full h-full p-2 gap-2 text-md font-[600]">
              <Phone /> ID Line :
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              089 699 5678
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full xl:w-8/12 h-full p-2 gap-2">
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
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 overflow-auto">
        <div className="flex flex-row items-center justify-between w-full h-full xl:w-10/12 gap-2 border-b-2 border-dark">
          <div
            onClick={() => setActiveSection("highway")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-dark text-md font-[600] hover:text-[#000000]"
          >
            <AddRoadOutlined /> ทางด่วน
          </div>
          <div
            onClick={() => setActiveSection("mall")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-dark text-md font-[600] hover:text-[#000000]"
          >
            <LocalMallOutlined /> ห้างสรรพสินค้า
          </div>
          <div
            onClick={() => setActiveSection("school")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-dark text-md font-[600] hover:text-[#000000]"
          >
            <SchoolOutlined /> สถานศึกษา
          </div>
          <div
            onClick={() => setActiveSection("hospital")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-dark text-md font-[600] hover:text-[#000000]"
          >
            <LocalHospitalOutlined /> สถานพยาบาล
          </div>
          <div
            onClick={() => setActiveSection("station")}
            className="flex items-center justify-center min-w-40 h-full p-2 gap-2 cursor-pointer hover:border-b-4 hover:border-dark text-md font-[600] hover:text-[#000000]"
          >
            <DirectionsSubwayFilledOutlined /> สถานนีรถไฟฟ้า
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
        {activeSection === "highway" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="ทางพิเศษศรีรัช ด่านงามวงศ์วาน" />
            <Listlocation text="ทางยกระดับอุตราภิมุข ด่านบางเขน" />
          </div>
        )}
        {activeSection === "mall" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="เดอะมอลล์ ไลฟ์สโตร์ งามวงศ์วาน" />
            <Listlocation text="พันธุ์ทิพย์ งามวงศ์วาน" />
            <Listlocation text="เออร์เบิน สแควร์" />
            <Listlocation text="แม็คโคร แจ้งวัฒนะ" />
          </div>
        )}
        {activeSection === "school" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="รร.ราชวินิตบางเขน" />
            <Listlocation text="รร.อนุบาล วณลักษณ์" />
            <Listlocation text="รร.เบญจมราชานุสรณ์" />
            <Listlocation text="รร.สาธิตแห่งมหาวิทยาลัยเกษตรศาสตร์" />
            <Listlocation text="ม.เกษตรศาสตร์" />
            <Listlocation text="ม.ธุรกิจบัณฑิต" />
          </div>
        )}
        {activeSection === "hospital" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="โรงพยาบาลนนทเวช" />
            <Listlocation text="โรงพยาบาลวิภาวดี" />
          </div>
        )}
        {activeSection === "station" && (
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-center w-full h-full xl:w-10/12 p-2 gap-2">
            <Listlocation text="รถไฟฟ้าสายสีแดง" />
            <Listlocation text="รถไฟฟ้าสายสีชมพู" />
          </div>
        )}
      </div>
    </div>
  );
}
