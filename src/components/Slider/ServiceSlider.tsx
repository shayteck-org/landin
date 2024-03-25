"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/Sections/services/services.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Typography from "../Typography";
import Image from "../Image/Image";
import { Col, Row } from "antd";
import TailRight from "@/icons/TailRight";

const { Link, Text, Title } = Typography;

type props = {
  slides: {
    data: {
      id: string;
      title: {
        data: {
          value: string;
        };
      };
      description: {
        data: {
          value: string;
        };
      };
      image: {
        data: {
          image_url: string;
        };
      };
      link: {
        data: {
          path: string;
        };
      };
      style: { bgColor: string };
    };
  }[];
  navigation: boolean;
};

export default function ServicesSlider({ slides, navigation = true }: props) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{}}
      breakpoints={{
        680: { slidesPerView: slides.length >= 2 ? 2 : slides.length },
        968: { slidesPerView: slides.length >= 3 ? 3 : slides.length },
      }}
      modules={[Pagination, Navigation]}
      className="mySliderSwiper"
      // style={{ width: "100%" }}
    >
      {slides.map((item) => (
        <SwiperSlide
          style={{
            backgroundColor: item.data.style.bgColor || "var(--white)",
          }}
          key={item.data.id}
          className={styles.card}
        >
          <div className={styles.cardImage}>
            <img src={item.data.image.data.image_url} alt={"یه متن جایگزین"} />
          </div>
          <h2 className={styles.cardTitle}>{item.data.title.data.value}</h2>
          <p className={styles.cardDescription}>
            {item.data.description.data.value}
          </p>

          <Row style={{ marginTop: "auto", alignItems: "center" }} gutter={8}>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <TailRight />
            </Col>
            <Col>
              <a href={item.data.link.data.path} className={styles.cardLink}>
                اطلاعات بیشتر
              </a>
            </Col>
          </Row>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
