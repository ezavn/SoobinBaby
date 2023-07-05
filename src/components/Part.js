import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

export default function Part() {
  const data = [
    {
      title: "Chiết xuất hồng sâm 6 năm tuổi",
      content:
        "Thành phần cô đặc hơn 60%, 15mg/g hỗn hợp Ginsenoside Rg1, Rb1 và Rb3, nội địa.",
    },
    {
      title: "Các thành phần chính khác",
      content:
        "Hương sữa chua tự nhiên, vitamin C, vỏ hạt hẹ (Thái Lan), nước lê cô đặc, mật ong nguyên chất, canxi tảo biển, chiết xuất cô đặc nhung hươu, rau chế biến, bột hỗn hợp viatmin và khoáng chất,...",
    },
    {
      title: "Tỉ lệ pha trộn nhân sâm thô",
      content: "Rễ sâm 70%, hồng sâm trong nước 30%.",
    },
  ];
  return (
    <section id="part" className="py-sectionMB md:py-section">
      <div className="max-w-[1440px] mx-auto px-[15px] md:px-[20px] xl:px-0">
        <div className="flex flex-col items-center md:flex-row xl:items-start gap-[30px] md:gap-0">
          <div className="max-w-[380px] lg:max-w-[530px] xl:max-w-[570px] flex-shrink-0">
            <h2
              className="font-extrabold text-[24px] md:text-[38px] lg:text-[48px] xl:text-[55px] text-black leading-[1.2] capitalize mb-[40px] text-center md:text-left"
              data-aos="fade-right"
            >
              Thành phần của <br className="hidden md:block" /> Nước{" "}
              <span className="text-lightYellow">
                {" "}
                <br className="block md:hidden" /> hồng Sâm Baby Smart Up
              </span>
            </h2>
            <div data-aos="fade-up">
              <Accordion className="w-full flex flex-col gap-[10px]">
                {data.map((item, index) => (
                  <AccordionItem key={index}>
                    {({ open }) => (
                      <>
                        <AccordionHeader className="flex items-center justify-between py-[20px] px-[40px] w-full h-[68px] bg-[#F1F6FA] rounded-[15px]">
                          <h3 className="text-[16px] font-bold text-black">
                            {item.title}
                          </h3>
                          <svg
                            class={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </AccordionHeader>

                        <AccordionBody
                          className={`${
                            open ? "py-[20px]" : "py-0"
                          } px-[40px] inline-block !duration-75`}
                        >
                          <div className="text-[14px] font-normal leading-[2]">
                            {item.content}
                          </div>
                        </AccordionBody>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="relative flex items-center justify-center flex-1">
            <div className="absolute z-10 top-0 left-[40px]">
              <img
                className="w-[80px] lg:w-[120px] xl:w-auto"
                srcSet="./images/part1.png 2x"
                alt=""
                data-aos="part1"
                data-aos-duration="2000"
              />
            </div>
            <div className="absolute z-10 bottom-[80px] left-[40px]">
              <img
                className="w-[80px] lg:w-[120px] xl:w-auto"
                srcSet="./images/part2.png 2x"
                alt=""
                data-aos="part2"
                data-aos-duration="2000"
              />
            </div>
            <div className="absolute z-10 top-[125px] right-0">
              <img
                className="w-[80px] lg:w-[120px] xl:w-auto"
                srcSet="./images/part3.png 2x"
                alt=""
                data-aos="part3"
                data-aos-duration="2000"
              />
            </div>
            <div data-aos="zoom-in">
              <img className="w-auto" srcSet="./images/part.png 2x" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
