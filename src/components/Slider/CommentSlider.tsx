"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/Sections/ratings/ratings.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import tailRight from "@/icons/tail-right.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Typography from "../Typography";
import Image from "../Image/Image";
import { Col, Rate, Row } from "antd";

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
      rate: {
        data: {
          star_count: number;
        };
      };
      comment: {
        data: {
          value: string;
        };
      };
      author: {
        data: {
          value: string;
        };
      };
    };
  }[];
  navigation: boolean;
};

export default function CommentSlider({ slides, navigation = true }: props) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={navigation}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
        className={styles.customSlider}
    >
      {slides.map((item) => (
        <SwiperSlide key={item.data.id} className={styles.commentCard}>
          <div className={styles.commentImage}>
            <Image data={item.data.image.data} />
          </div>
          <Row className={styles.commentSection}>
            <Rate
              className={styles["ant-rate"]}
              disabled
              allowHalf
              defaultValue={item.data.rate.data.star_count}
            />
            <Text
              className={styles.commentText}
              textType="paragraph"
              data={item.data.comment.data}
            />
            <Text
              className={styles.commentAuthor}
              data={item.data.author.data}
              textType="span"
            />
          </Row>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
