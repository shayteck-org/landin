type component = {
  elementId: string;
  data: {
    value: string;
  };
};

elementId: {
    "01xxL" -> title => : L : level; L can be 1 to 6 
    "02xxT" -> text => : T : span | p; if T is 1 paragraph else span
    "03xxx" -> link;
    "04xxx" -> Image;
    "05xxx" -> Button 
}

{
    section: number,
    elementId: "xxxx",
    data: {
      theme: "dark" | "light",
      children: [
        {
          elementId: "04xxx",
          data: {
            image_url: "",
          },
        },
        {
          elementId: "01xxL",
          data: {
            value: "سودِو",
          },
        },
        {
          elementId: "02xxT",
          data: {
            value: "توضیحات",
          },
        },
        {
          elementId: "03xxx",
          data: {
            value: "لینک",
            path: "/to-where",
          },
        },
        {
          elementId: "05xxx",
          data: {
            value: "تماس با ما",
            style: {
              color: "hex",
              font : "name",
            },
            onClick: enum ,
          },
        },
      ],
    },
  },

  export enum onClickModel {
    openDialog1 = "openDialog1",
    openDialog2 = "openDialog2",
    openDialog3 = "openDialog3",
    openDialog4 = "openDialog4",
  }
  