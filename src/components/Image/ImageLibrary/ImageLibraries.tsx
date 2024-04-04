import { BASE_URL } from "@/services/HTTP";
import { getGallery } from "@/services/galleries";
import { Row, Spin } from "antd";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function ImageLibraryByType(props: {
  type: "about" | "service" | "why";
  setData: Dispatch<SetStateAction<{ modal: boolean; id: string; data: any }>>;
}) {
  const [loading, toggleLoading] = useState(true);
  const { setData, type } = props;
  const [array, setArray] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      toggleLoading(true);
      const images = await getGallery(type);
      if (images) setArray(images);
      console.log(images);
      toggleLoading(false);
    })();
  }, []);

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

  if (loading) return <Spin />;

  switch (type) {
    case "why": {
      return (
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 8,
          }}
        >
          {Array.from({ length: 4 }).map((image, index: number) => (
            <img
              style={{
                cursor: "pointer",
              }}
              onClick={(e) => onClick(e)}
              width={60}
              height={60}
              src={`/svg/why${index + 1}.svg`}
              alt="images"
              key={index}
            />
          ))}
        </Row>
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
          {array.map((image, index: number) => (
            <img
              style={{
                cursor: "pointer",
              }}
              onClick={(e) => onClick(e)}
              width={60}
              height={60}
              src={`${BASE_URL}images/${image}`}
              alt="images"
              key={index}
            />
          ))}
        </Row>
      );
  }
}
