import React from "react";

export default function Ginseng() {
  return (
    <section className="ginseng pt-sectionMB md:pt-section pb-section xl:pb-[120px] bg-[#F1F6FA] relative">
      <div className="top-[50%] translate-y-[-50%] translate-x-[-50%] xl:translate-y-0 xl:translate-x-0 absolute xl:top-[230px] left-[50%] xl:left-[-220px]">
        <img
          className="w-[380px] xl:w-auto"
          srcSet="./images/ginseng.png 2x"
          alt=""
        />
      </div>
      <div className="xl:block hidden absolute top-[230px] right-[-120px] xl:right-[-220px]">
        <img
          className="w-[240px] xl:w-auto"
          srcSet="./images/ginseng.png 2x"
          alt=""
        />
      </div>
      <div className="relative page-container">
        <div className="absolute top-[25px] left-[8px] lg:left-0 xl:left-[-80px]">
          <img
            className="w-[30px] md:w-[60px] lg:w-auto"
            src="./icons/la-icon.svg"
            alt=""
            data-aos="zoom-in"
          />
        </div>
        <div className="absolute top-[50px] right-[8px] lg:right-0 xl:right-[-50px]">
          <img
            className="w-[50px] md:w-[80px] lg:w-auto"
            src="./icons/hoa-icon.svg"
            alt=""
            data-aos="zoom-out"
          />
        </div>
        <h2
          className="font-extrabold text-[24px] md:text-[38px] lg:text-[48px] xl:text-[55px] text-black text-center leading-[1.2]"
          data-aos="fade-down"
        >
          NƯỚC <span className="text-lightYellow">HỒNG SÂM BABY SMART UP</span>{" "}
          <br className="hidden md:block" />{" "}
          <span className="text-green">KIDS RED GINSENG SMART UP</span>
        </h2>
        <p
          className="text-black text-[16px] md:text-[20px] text-center mt-[20px] md:mt-[30px] mb-[30px] md:mb-[50px]"
          data-aos="fade-up"
        >
          Loại hình sản phẩm: Dạng gói nước <br /> Quy cách: 20mL x 10 gói ( 200
          mL)
        </p>
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 gap-[20px] xl:gap-[50px] mb-[100px]">
          <GinsengItem
            img="./images/ginseng1.svg"
            desc="Sản phẩm được sản xuất tại nhà máy Hồng sâm Deadong - 1 trong 3 nhà máy sản xuất Hồng sâm lớn nhất Hàn Quốc."
            first
          >
            THƯƠNG HIỆU <br /> UY TÍN
          </GinsengItem>
          <GinsengItem
            img="./images/ginseng2.svg"
            desc="Đạt chứng nhận là sản phẩm thực phẩm chức năng của Hàn rất uy tín cho người tiêu dùng - Một trong những chứng nhận mà không phải các sản phẩm hồng sâm baby Hàn Quốc dành cho trẻ em nào trên thị trường Việt Nam hiện tại cũng có gắn nhãn này."
            second
          >
            CHỨNG NHẬN <br /> CHẤT LƯỢNG
          </GinsengItem>
          <GinsengItem
            img="./images/ginseng3.svg"
            desc="Hộp có họa tiết thú dùng cho trẻ em, vị ngọt thơm dễ uống, ngon hơn khi uống lạnh."
            third
          >
            THIẾT KẾ PHÙ HỢP <br /> VỚI TRẺ EM
          </GinsengItem>
        </div>
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <GinsengItem
              img="./images/ginseng1.svg"
              desc="Sản phẩm được sản xuất tại nhà máy Hồng sâm Deadong - 1 trong 3 nhà máy sản xuất Hồng sâm lớn nhất Hàn Quốc."
              first
            >
              THƯƠNG HIỆU <br /> UY TÍN
            </GinsengItem>
            <GinsengItem
              img="./images/ginseng2.svg"
              desc="Đạt chứng nhận là sản phẩm thực phẩm chức năng của Hàn rất uy tín cho người tiêu dùng - Một trong những chứng nhận mà không phải các sản phẩm hồng sâm baby Hàn Quốc dành cho trẻ em nào trên thị trường Việt Nam hiện tại cũng có gắn nhãn này."
              second
            >
              CHỨNG NHẬN <br /> CHẤT LƯỢNG
            </GinsengItem>
          </div>
          <div className="max-w-[359px] mx-auto mt-[20px]">
            <GinsengItem
              img="./images/ginseng3.svg"
              desc="Hộp có họa tiết thú dùng cho trẻ em, vị ngọt thơm dễ uống, ngon hơn khi uống lạnh."
              third
            >
              THIẾT KẾ PHÙ HỢP <br /> VỚI TRẺ EM
            </GinsengItem>
          </div>
        </div>
        <div className="text-center mt-[40px] lg:mt-0">
          <a
            className="contact-button"
            href="http://m.me/100062932646413"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[40px]"
              src="./icons/phone-white-icon.svg"
              alt=""
            />
            <span>HỖ TRỢ TƯ VẤN</span>
          </a>
        </div>
        <div className="h-[62px]">
          <div
            class="buttons !text-center !mt-[30px] md:mt-[60px]"
            data-aos="fade-up"
          >
            <a
              href="https://sieuthisamsoobin.com/san-pham/nuoc-hong-sam-baby-smart-up-30-goi/"
              target="_blank"
              rel="noreferrer"
              class="blob-btn2"
            >
              Đặt mua Nước hồng Sâm Baby Smart Up
              <span class="blob-btn2__inner">
                <span class="blob-btn2__blobs">
                  <span class="blob-btn2__blob"></span>
                  <span class="blob-btn2__blob"></span>
                  <span class="blob-btn2__blob"></span>
                  <span class="blob-btn2__blob"></span>
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

const GinsengItem = ({ img, children, desc, first, second, third }) => {
  return (
    <div
      className={`${first && "bg-green"} ${second && "bg-red"} ${
        third && "bg-yellow"
      } rounded-[20px] px-[14px] py-[11px]`}
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <div className="flex flex-col items-center h-full border border-white border-dashed rounded-[20px] px-[20px] pt-[30px] pb-[15px]">
        <div className="mb-[40px]">
          <img src={img} alt="" />
        </div>
        <h3 className="text-[20px] md:text-[24px] font-black text-white text-center uppercase mb-[20px]">
          {children}
        </h3>
        <p className="font-semibold text-center text-white">{desc}</p>
      </div>
    </div>
  );
};
