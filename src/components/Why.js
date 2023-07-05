/* eslint-disable no-unused-vars */
import React from "react";

export default function Why() {
  return (
    <section className="why bg-[rgba(253,_171,_145,_0.15)] pt-section pb-[80px] lg:pb-[120px] xl:pb-[190px] relative">
      <div className="absolute top-[20px] left-[20px] md:top-[60px] xl:top-[100px] md:left-[40px]">
        <img
          className="w-[60px] lg:w-[90px] xl:w-auto"
          src="./images/leaf-icon.svg"
          alt=""
          data-aos="zoom-in"
        />
      </div>
      <div className="absolute bottom-0 left-[30px] z-[-1]">
        <img
          className="w-[50px] lg:w-[80px] xl:w-auto"
          src="./images/flower-icon.svg"
          alt=""
          data-aos="fade-up"
        />
      </div>
      <div className="absolute top-[15px] md:top-[40px] lg:top-[50px] right-[20px] lg:right-[30px]">
        <img
          className="w-[80px] lg:w-[110px] xl:w-auto"
          src="./images/cloud-icon.svg"
          alt=""
          data-aos="zoom-in"
        />
      </div>
      <div className="absolute bottom-[-75px] lg:bottom-[-120px] right-0 xl:bottom-[-220px] xl:right-[-20px] z-[-1]">
        <img
          className="w-[100px] lg:w-[150px] xl:w-auto"
          src="./images/cloud2-icon.svg"
          alt=""
          data-aos="fade-up"
        />
      </div>
      <div className="max-w-[1440px] mx-auto px-[15px] md:px-[20px] xl:px-0">
        <h2
          className="font-extrabold text-[24px] md:text-[38px] lg:text-[48px] xl:text-[55px] text-black leading-[1.2] capitalize mb-[20px] lg:mb-[40px] text-center"
          data-aos="fade-down"
        >
          Tại sao bạn nên mua sản phẩm <br className="hidden md:block" />
          <span className="text-lightYellow">
            NƯỚC HỒNG SÂM BABY SMART UP
          </span>{" "}
          <br className="hidden md:block" />
          tại Siêu thị Sâm Soobin?
        </h2>
        <p
          className="text-[15px] font-extrabold text-black text-justify md:text-center max-w-[1000px] mx-auto md:px-[40px] lg:px-0"
          data-aos="fade-up"
        >
          Sản phẩm NƯỚC HỒNG SÂM BABY SMART UP được Siêu thị Sâm Soobin phân
          phối và nhập khẩu chính hãng tại Hàn Quốc.Siêu thị Sâm Soobin – Nhân
          Sâm Việt Hàn tự hào là một trong những doanh nghiệp đầu tiên đưa các
          sản phẩm chăm sóc sức khỏe xuất xứ từ Hàn Quốc đến với người tiêu dùng
          Việt.
        </p>
        <p
          className="font-birth text-[36px] text-center mt-[20px] mb-[30px] lg:mt-[30px] lg:mb-[40px]"
          data-aos="zoom-in-up"
        >
          Chúng tôi Cam kết
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] md:gap-[50px] xl:gap-[100px]">
          <WhyItem
            num="./images/why-num1.png 2x"
            img="./images/why-shape1.svg"
            content="Tất cả sản phẩm của Siêu thị Sâm Soobin phân phối đều được nhập khẩu chính hãng tại Hàn Quốc"
          ></WhyItem>
          <WhyItem
            num="./images/why-num2.png 2x"
            img="./images/why-shape2.svg"
            content="Các sản phẩm Siêu thị Sâm Soobin đều có công bố của Bộ Y Tế"
          ></WhyItem>
          <WhyItem
            num="./images/why-num3.png 2x"
            img="./images/why-shape3.svg"
            content="Cam kết mang đến cho quý khách hàng sản phẩm chất lượng với giá thành phù hợp nhất"
          ></WhyItem>
          <WhyItem
            num="./images/why-num4.png 2x"
            img="./images/why-shape4.svg"
            content="Cam kết tư vấn đúng nhu cầu khách hàng, đúng chất lượng sản phẩm."
          ></WhyItem>
          <WhyItem
            num="./images/why-num5.png 2x"
            img="./images/why-shape5.svg"
            content="Cam kết sản phẩm sẽ đến được tay khách hàng một cách trọn vẹn nhất."
          ></WhyItem>
        </div>
      </div>
    </section>
  );
}

const WhyItem = ({ num, img, content }) => {
  return (
    <div className="relative flex flex-col">
      <div
        className="relative z-20 flex flex-col gap-[20px]"
        data-aos="fade-right"
      >
        <div className="self-end text-right">
          <img srcSet={num} alt="" />
        </div>
        <p className="font-semibold text-center">{content}</p>
      </div>
      <div
        data-aos="fade-left"
        className="absolute bottom-0 right-0 lg:right-[-20px] xl:bottom-[-70px] xl:right-[-70px]"
      >
        <img className="w-[160px] xl:w-auto" src={img} alt="" />
      </div>
    </div>
  );
};
