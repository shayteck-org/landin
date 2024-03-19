import CommentSlider from "@/components/Slider/CommentSlider";
import React from "react";

type componentsProps = {
  components: {
    content: {
      data: {
        id: string;
        image: {
          data: {
            value: string;
            image_url: string;
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
  };
};

const RatingSection: React.FC<componentsProps> = ({ components }) => {
  const { content } = components;
  console.log(content);

  return (
    <div>
      <CommentSlider navigation={false} slides={content} />
    </div>
  );
};

export default RatingSection;
