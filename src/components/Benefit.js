import React from "react";
import Slider from "react-slick";

export default function Benefit() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="relative benefit bg-[rgba(253,_171,_145,_0.15)] pt-[100px] md:pt-[200px] xl:pt-[280px] pb-sectionMB md:pb-section">
      <div
        className="md:block hidden absolute top-[60%] xl:top-[50%] translate-y-[-50%] right-0"
        data-aos="fade-left"
      >
        <img
          className="absolute h-auto top-[70px] right-[105px] xl:right-[30px] w-[200px] xl:w-[400px]"
          srcSet="./images/sb-be1.png 2x"
          alt=""
          data-aos="zoom-in-up"
          data-aos-delay="300"
        />
        <img
          className="absolute h-auto top-[150px] xl:top-[180px] right-[30px] w-[180px] xl:w-[380px]"
          srcSet="./images/sb-be2.png 2x"
          alt=""
          data-aos="zoom-in-left"
          data-aos-delay="300"
        />
        <img
          className="w-[280px] xl:w-[500px]"
          src="./images/liquid.svg"
          alt=""
        />
      </div>
      <div
        id="benefit"
        className="pt-[30px] px-[20px] xl:px-[70px] relative z-10"
      >
        <div className="max-w-[1025px]">
          <h2
            className="font-extrabold text-[24px] md:text-[38px] lg:text-[48px] xl:text-[55px] text-black leading-[1.2] capitalize"
            data-aos="fade-down"
          >
            <span className="text-[30px] md:text-[46px] lg:text-[55px] xl:text-[64px] text-red uppercase">
              5 Lợi ích
            </span>{" "}
            tuyệt vời <br /> của nước{" "}
            <span className="uppercase text-lightYellow">
              hồng sâm Baby <br /> Smart Up
            </span>{" "}
            dành cho trẻ
          </h2>
          <p
            className="text-black leading-[2] max-w-[810px] mt-[20px] lg:mt-[40px]"
            data-aos="fade-up"
          >
            Trẻ em từ 2 đến 13 tuổi là giai đoạn quan trọng, cần được bổ sung
            dinh dưỡng và tăng cường sức khỏe để phát triển thể chất. Một trong
            những phương pháp tự nhiên và hiệu quả để hỗ trợ các bậc phụ huynh
            trong giai đoạn này là sử dụng hồng sâm Baby Smart Up dành cho trẻ
            em.
          </p>
          <p
            className="text-black leading-[2] max-w-[810px] mt-[10px] mb-[20px] lg:mb-[40px]"
            data-aos="fade-up"
          >
            Hồng sâm Baby là một sản phẩm tự nhiên được chiết xuất từ củ hồng
            sâm tươi ngon. Với những đặc điểm riêng biệt và công thức chăm sóc
            đặc biệt, hồng sâm Baby mang lại nhiều lợi ích cho sức khỏe cho trẻ
            trong giai đoạn từ 2 - 13 tuổi, cụ thể:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
            <BenefitItem
              img="./images/sb-benefit1.svg"
              title="Bổ sung dinh dưỡng"
            >
              Cung cấp một lượng lớn dưỡng chất quan trọng như vitamin, khoáng
              chất và các thành phần quý giá khác. Điều này giúp bổ sung những
              chất cần thiết cho sự phát triển cơ bắp, xương khớp và hệ thần
              kinh của trẻ.
            </BenefitItem>
            <BenefitItem
              img="./images/sb-benefit2.svg"
              title="Tăng sức đề kháng"
            >
              Hồng sâm Baby chứa các chất chống oxy hóa và kháng vi khuẩn tự
              nhiên. Điều này giúp tăng cường hệ miễn dịch của trẻ, bảo vệ cơ
              thể khỏi các tác nhân gây bệnh và tăng cường khả năng chống lại
              các bệnh truyền nhiễm.
            </BenefitItem>
            <BenefitItem
              img="./images/sb-benefit3.svg"
              title="Cải thiện tình trạng còi xương"
            >
              Trong Hồng sâm được xem là chất chứa nhiều hàm lượng khoáng chất,
              các vitamin và 18 loại axit amin cần thiết cho cơ thể, tăng khả
              năng hấp thu canxi, giúp ngăn ngừa các bệnh về xương khớp.
            </BenefitItem>
            <BenefitItem
              img="./images/sb-benefit4.svg"
              title="Ăn ngon, ngủ ngoan hơn"
            >
              Nước hồng sâm Baby giúp bé hình thành hệ tiêu hóa tốt, giảm các
              bệnh về đường tiêu hóa, phòng chống chứng khó tiêu, giúp trẻ ăn
              ngon miệng hơn và hấp thu và chuyển hóa tốt thức ăn.
            </BenefitItem>
            <BenefitItem
              img="./images/sb-benefit5.svg"
              title="Giảm mệt mỏi, tăng cường thể lực"
            >
              Hồng sâm Baby giúp cải thiện năng lượng và sự tỉnh táo cho trẻ.
              Các thành phần tự nhiên trong hồng sâm giúp tăng cường tuần hoàn
              máu và cung cấp năng lượng cho cơ thể. Điều này giúp trẻ tỉnh táo,
              tập trung và có hiệu suất cao trong hoạt động hàng ngày.
            </BenefitItem>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[40px] md:mt-[60px] lg:mt-[40px] xl:mt-0">
        <div className="benefit-slide w-full max-w-[553px] h-[140px] md:h-[170px]">
          <Slider {...settings}>
            <div className="mx-[5px] md:mx-0 px-[5px] md:px-0">
              <img srcSet="./images/sb-benefitSlide1.png 2x" alt="" />
            </div>
            <div className="mx-[5px] md:mx-0 px-[5px] md:px-0">
              <img srcSet="./images/sb-benefitSlide2.png 2x" alt="" />
            </div>
            <div className="mx-[5px] md:mx-0 px-[5px] md:px-0">
              <img srcSet="./images/sb-benefitSlide3.png 2x" alt="" />
            </div>
            <div className="mx-[5px] md:mx-0 px-[5px] md:px-0">
              <img srcSet="./images/sb-benefitSlide4.png 2x" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

const BenefitItem = ({ img, children, title }) => {
  return (
    <div
      className="flex benefit-item gap-[20px] lg:gap-[30px]"
      data-aos="zoom-in-up"
    >
      <div className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] flex-shrink-0">
        <img className="object-cover w-full h-full" src={img} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="text-[18px] lg:text-[24px] text-black font-extrabold">
          {title}
        </h4>
        <p className="text-[14px] text-black">{children}</p>
      </div>
    </div>
  );
};

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        className="w-[38px] h-[28px] md:w-[58px] md:h-[48px]"
        src="./icons/sb-arrow-icon.svg"
        alt=""
      />
    </div>
  );
}
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        className="w-[38px] h-[28px] md:w-[58px] md:h-[48px] rotate-[180deg]"
        src="./icons/sb-arrow-icon.svg"
        alt=""
      />
    </div>
  );
}
