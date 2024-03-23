import { Row } from "antd";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Fragment } from "react/jsx-runtime";

export default function ImageLibraryByType(props: {
  type: "about" | "service";
  setData: Dispatch<SetStateAction<{ modal: boolean; id: string; data: any }>>;
}) {
  const { setData, type } = props;

  const onClick = (e: MouseEvent<HTMLImageElement>) => {
    let imageUrl = e.currentTarget.src;

    setData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        image: {
          data: {
            image_url: imageUrl,
          },
        },
      },
    }));
  };

  switch (type) {
    case "about": {
      return (
        <Fragment>
          <div>☺</div>
          <div>☺</div>
          <div>☺</div>
          <div>☺</div>
        </Fragment>
      );
    }
    case "service":
      return (
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8,
          }}
        >
          {Array.from({ length: 12 }).map((image, index: number) => (
            <img
              style={{
                cursor: "pointer",
                transform: `rotate(${index * 15}deg)`,
              }}
              onClick={(e) => onClick(e)}
              width={60}
              height={60}
              src="/sectionP1.png"
              alt="images"
              key={index}
            />
          ))}
        </Row>
      );
  }
}
