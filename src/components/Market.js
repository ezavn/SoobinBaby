import React from "react";

export default function Market() {
  return (
    <section className="market pb-[150px] md:pb-[250px] lg:pb-[290px] xl:pb-[380px] pt-sectionMB md:pt-section bg-lightYellow">
      <div className="relative flex flex-col items-center max-w-[1440px] mx-auto px-[15px] md:px-[20px] xl:px-0">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img src="./images/ginseng-bg.svg" alt="" />
        </div>
        <h2
          className="font-black text-white text-[24px] md:text-[38px] lg:text-[48px] xl:text-[55px] leading-[1.2] uppercase text-center"
          data-aos="fade-down"
        >
          Nhân Sâm Việt Hàn <br className="block xl:hidden" /> – Siêu thị Sâm
          Soobin
        </h2>
        <p
          className="text-[18px] md:text-[20px] lg:text-[30px] font-bold text-white mb-[30px] lg:mb-[50px] text-center"
          data-aos="fade-up"
        >
          sứ mệnh chăm sóc sức khỏe hàng triệu gia đình Việt Nam{" "}
          <br className="hidden md:block xl:hidden" /> bằng hồng sâm Hàn Quốc
        </p>
        <div className="mb-[14px]">
          <img
            className="w-[50px] md:w-[80px] xl:w-auto"
            src="./icons/quote.svg"
            alt=""
            data-aos="zoom-out"
          />
        </div>
        <p
          className="text-[16px] md:text-[18px] lg:text-[24px] font-medium text-white mb-[20px] md:mb-[38px] text-center"
          data-aos="zoom-out"
        >
          Chúng tôi mong muốn cuộc sống của bạn khỏe hơn, đẹp hơn, chất lượng
          hơn
        </p>
        <p
          className="text-[18px] lg:text-[24px] font-medium text-white text-center mb-[20px] md:mb-[40px] lg:mb-[60px]"
          data-aos="zoom-out"
        >
          Chị{" "}
          <span className="font-ms text-[64px] md:text-[72px] lg:text-[96px] leading-[1]">
            Thùy Dương
          </span>{" "}
          <br /> Giám đốc
        </p>
        <div className="h-[62px]">
          <div class="buttons !mt-0" data-aos="fade-up">
            <a
              href="https://sieuthisamsoobin.com/san-pham/nuoc-hong-sam-baby-smart-up-30-goi/"
              target="_blank"
              rel="noreferrer"
              class="blob-btn"
            >
              Đặt mua Nước hồng Sâm Baby Smart Up
              <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                  <span class="blob-btn__blob"></span>
                </span>
              </span>
            </a>
            <br />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
