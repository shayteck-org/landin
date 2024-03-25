import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/Sections/resume/resume.module.scss";
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

export default function ResumeSlider({ slides, navigation = true }: props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={80}
        breakpoints={{
          768: {
            grid: {
              rows: 2,
            },
            slidesPerView: 2,
          },
        }}
        navigation={navigation}
        modules={[Grid, Navigation]}
        className={styles["resumeOne-slider"]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={""} key={slide.data.id}>
            <Row
              className={`${styles.itemContainer} ${
                (slides.length > 4 && index % 2 === 0 && styles.miniBox) || ""
              } ${" "}
                ${
                  (slides.length <= 4 && index % 3 === 0 && styles.miniBox) ||
                  ""
                }
                ${
                  (slides.length <= 4 && index === 2 && styles.transformBox) ||
                  ""
                }
                ${
                  (slides.length > 4 &&
                    (index === 3 || index === 5) &&
                    styles.transformBox) ||
                  ""
                }
                `}
            >
              <img src={slide.data.image.data.image_url} />
              <Text data={slide.data.description.data} textType="span" />
              <Text data={slide.data.title.data} textType="paragraph" />
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
