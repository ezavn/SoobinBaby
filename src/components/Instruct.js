import React from "react";

export default function Instruct() {
  return (
    <section className="relative pt-[140px] md:pt-[250px] lg:pt-[340px] xl:pt-[470px] pb-sectionMB md:pb-section">
      <div className="absolute top-[-80px] right-[5px] md:top-[-125px] md:right-[10px] lg:top-[-160px] lg:right-[50px] xl:top-[-320px] xl:right-[60px]">
        <img
          className="w-[220px] md:w-[380px] lg:w-[500px] xl:w-[900px]"
          srcSet="./images/ins4.png 2x"
          alt=""
          data-aos="fade-left"
          data-aos-duration="1800"
        />
      </div>
      <div className="absolute top-[-120px] left-[-15px] md:top-[-240px] lg:top-[-300px] xl:top-[-380px] md:left-0">
        <img
          className="w-[300px] md:w-[580px] lg:w-[750px] xl:w-[1000px]"
          srcSet="./images/ins3.png 2x"
          alt=""
          data-aos="fade-right"
          data-aos-duration="1800"
        />
      </div>
      <div id="instruct" className="pt-[30px] page-container">
        <h2
          className="font-extrabold text-[24px] md:text-[38px] lg:text-[48px] xl:text-[55px] text-black leading-[1.2] uppercase mb-[15px] xl:mb-[30px] text-center"
          data-aos="fade-down"
        >
          HƯỚNG DẪN SỬ DỤNG <br className="block md:hidden" /> SẢN PHẨM
        </h2>
        <h3
          className="font-bold italic text-[18px] lg:text-[24px] uppercase text-center"
          data-aos="zoom-in-down"
        >
          Lưu ý:
        </h3>
        <p
          className="font-semibold text-center mb-[40px] lg:mb-[60px]"
          data-aos="fade-up"
        >
          Tác dụng của sản phẩm thay đổi tùy theo cơ địa, khả năng hấp thụ của
          mỗi người. <br className="hidden md:block" /> Sản phẩm này không phải
          là thuốc nên không có tác dụng thay thế thuốc chữa bệnh.
        </p>
        <div className="flex flex-col md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[65px]">
          <div
            className="rounded-[80px] bg-lightYellow py-[30px] px-[20px] flex-1"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1800"
          >
            <div className="flex flex-col items-center justify-center rounded-[70px] border border-dashed border-white pt-[68px] pb-[80px] h-full">
              <div className="mb-[50px]">
                <img
                  className="w-[240px] lg:w-auto"
                  srcSet="./images/ins1.png 2x"
                  alt=""
                />
              </div>
              <div className="font-black text-center mb-[20px]">
                <h3 className="text-[32px] leading-[1]">Bé 3 - 8 tuổi</h3>
                <p className="">Mỗi ngày dùng 1 gói/ ngày</p>
              </div>
              <div className="font-black text-center">
                <h3 className="text-[32px] leading-[1]">Bé 9 – 13 tuổi</h3>
                <p> Mỗi ngày dùng 2 gói / ngày</p>
              </div>
            </div>
          </div>
          <div
            className="rounded-[80px] bg-[#E37378] py-[30px] px-[20px] flex-1"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1800"
          >
            <div className="flex flex-col justify-center items-center rounded-[70px] border border-dashed border-white lg:pt-[68px] pt-[38px] pb-[40px] lg:pb-[80px] px-[10px] lg:px-0 h-full">
              <div className="mb-[50px] md:mb-[100px] lg:mb-[150px]">
                <img
                  className="w-[260px] lg:w-auto"
                  srcSet="./images/ins2.png 2x"
                  alt=""
                />
              </div>
              <p className="font-black text-center lg:px-[30px]">
                – Dùng vào buổi sáng hoặc trưa,trước hoặc sau khi ăn 30 phút{" "}
                <br /> – Nên dùng trước khi ăn vì bụng rỗng dễ hấp thu{" "}
                <br className="hidden lg:block" /> chất dinh dưỡng hơn <br /> –
                Có thể để tủ lạnh dùng nếu bé thích uống lạnh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
