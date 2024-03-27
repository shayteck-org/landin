import CommentSlider from "@/components/Slider/CommentSlider";
import useSectionEdit from "@/hooks/useSectionEdit";
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
  const { EditSign, Editor, mode, setMode, state, setState } = useSectionEdit({
    firstData: components,
    type: "rating",
  });
  const { content } = state;

  return (
    <div
      style={{
        position: "relative",
        borderBottom: "2px solid #E7E9ED",
        marginBottom: 80,
      }}
    >
      <EditSign setMode={setMode} />
      <CommentSlider navigation={false} slides={content} />
      <Editor />
    </div>
  );
};

export default RatingSectionOne;
