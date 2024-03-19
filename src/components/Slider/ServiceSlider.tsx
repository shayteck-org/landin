"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/Sections/services/services.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import tailRight from "@/icons/tail-right.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Typography from "../Typography";
import Image from "../Image/Image";
import { Col, Row } from "antd";

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
      navigation={navigation}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        680: { slidesPerView: 2 },
        968: { slidesPerView: 3 },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
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
            <Image
              data={{ ...item.data.image.data, value: "یه متن جایگزین" }}
            />
          </div>
          <Title
            className={styles.cardTitle}
            level={2}
            data={item.data.title.data}
          />
          <Text
            className={styles.cardDescription}
            data={item.data.description.data}
            textType="paragraph"
          />

          <Row style={{ marginTop: "auto", alignItems: "center" }} gutter={8}>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <img src={tailRight} alt="arrowKey" />
            </Col>
            <Col>
              <Link
                className={styles.cardLink}
                data={{ ...item.data.link.data, value: "اطلاعات بیشتر" }}
              />
            </Col>
          </Row>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
