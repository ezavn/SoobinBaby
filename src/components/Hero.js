import React from "react";

export default function Hero() {
  return (
    <section className="hero h-[600px] md:h-[620px] lg:h-[680px] xl:h-[780px] pt-[80px] lg:pt-[110px] flex flex-col items-center relative">
      <div className="absolute bottom-[35px] md:bottom-[-10px] right-0">
        <img
          className="w-[235px] md:w-[400px] xl:w-auto"
          srcSet="./images/sb-hero1.png 2x"
          alt=""
          data-aos="fade-left"
        />
      </div>
      <div className="absolute left-0 bottom-[-100px] md:bottom-[-187px] lg:bottom-[-215px] md:left-[15px] lg:left-[50px]">
        <img
          className="w-[350px] md:w-[500px] lg:w-[600px] xl:w-auto"
          srcSet="./images/sb-hero3.png 2x"
          alt=""
          data-aos="fade-right"
        />
      </div>
      <div className="absolute bottom-[-72px] md:bottom-[-155px] lg:bottom-[-170px] left-[60%]">
        <img
          className="w-[380px] md:w-[300px] lg:w-[380px] xl:w-auto"
          srcSet="./images/sb-hero4.png 2x"
          alt=""
          data-aos="fade-left"
        />
      </div>
      <div className="relative z-20 w-full page-container">
        <div className="hidden lg:block absolute top-[-30px] xl:top-[-90px] left-[-100px]">
          <img className="w-auto" src="./images/sb-bongbong.svg" alt="" />
        </div>
        <div className="w-full md:max-w-[885px] flex flex-col relative z-20">
          <div className="flex items-center lg:gap-[20px] md:gap-0 gap-[10px] relative">
            <div data-aos="fade-right">
              <p className="text-[#5BA760] font-medium text-[12px] md:text-[14px] tracking-[2px]">
                Sản phẩm được các mẹ tin tưởng và hài lòng cho con sử dụng
              </p>
              <h3 className="text-black font-black text-[24px] md:text-[32px] lg:text-[38px] xl:text-[45px] tracking-[15%]">
                NƯỚC HỒNG SÂM
              </h3>
              <h2 className="text-lightYellow font-black text-[36px] md:text-[64px] lg:text-[74px] xl:text-[90px] leading-[1] mb-[20px]">
                BABY SMART
              </h2>
              <h4 className="text-black font-bold text-[15px] md:text-[18px] lg:text-[20px]">
                Bé Yêu mau ăn - chóng lớn - tăng cường đề kháng
              </h4>
            </div>
            <div className="md:ml-[-50px] lg:ml-0 md:block hidden">
              <img
                className="w-[100px] md:w-[200px] xl:w-auto"
                srcSet="./images/sb-hero2.png 2x"
                alt=""
                data-aos="fade-left"
              />
            </div>
            <div className="md:ml-[-50px] lg:ml-0 block md:hidden absolute right-[10px]">
              <img
                className="w-[100px] md:w-[200px] xl:w-auto"
                srcSet="./images/sb-hero2.png 2x"
                alt=""
                data-aos="fade-left"
              />
            </div>
          </div>
          <div className="xl:mt-[20px]">
            <div class="buttons !mt-[30px] !md:mt-[60px]" data-aos="fade-up">
              <a
                href="https://sieuthisamsoobin.com/san-pham/nuoc-hong-sam-baby-smart-up-30-goi/"
                target="_blank"
                rel="noreferrer"
                class="blob-btn"
              >
                ĐẶT MUA NGAY
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
      </div>
    </section>
  );
}
