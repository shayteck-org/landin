import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/Sections/whyUs/WhyUs.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Col, Row } from "antd";
import Image from "../Image/Image";
import Typography from "../Typography";

const { Link, Text, Title } = Typography;

type props = {
  slides: {
    data: {
      id: string;
      image: {
        data: {
          image_url: string;
          value: string;
        };
      };
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
    };
  }[];
  navigation: boolean;
};

export default function WhyUsSlider({ slides, navigation = true }: props) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 1,
          fill: "row",
        }}
        spaceBetween={80}
        breakpoints={{
          768: {
            grid: {
              rows: 2,
            },
          },
        }}
        navigation={navigation}
        modules={[Grid, Navigation]}
        className={styles["whyUsOne-slider"]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.data.id}>
            <Row className={styles.itemContainer}>
              <Col span={4}>
                <Image data={slide.data.image.data} />
              </Col>
              <Col span={20}>
                <Text data={slide.data.title.data} textType="paragraph" />
                <Text data={slide.data.description.data} textType="span" />
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
