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

const RatingSectionOne: React.FC<componentsProps> = ({ components }) => {
  const { content } = components;

  return (
    <div style={{ borderBottom: "2px solid #E7E9ED", marginBottom: 80 }}>
      <CommentSlider navigation={false} slides={content} />
    </div>
  );
};

export default RatingSectionOne;
