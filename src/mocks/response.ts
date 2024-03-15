// image :1000 , title:1001, description:2002, button : 1003

export const response = [
  {
    section: 1,
    elementId: "10001",
    data: {
      theme: "light",
      children: [
        {
          parent: 1,
          elementId: "01001",
          data: {
            children: null,
            value: `سودِو\n خلق کسب و کار راحت`,
          },
        },
        {
          parent: 1,
          elementId: "02001",
          data: {
            children: null,
            value:
              "ایجاد کسب و کار در این دنیا نیاز به دانش عمیق در حوضه شبکه و مارتینگ داره , این مورد را به ما بسپارید",
          },
        },
        {
          parent: 1,
          section: 1,
          elementId: "05003",
          data: {
            children: null,
            value: "ثبت درخواست",
            style: {
              bgColor: "#473BF0",
            },
          },
        },
        {
          parent: 2,
          section: 1,
          elementId: "04003",
          data: {
            children: null,
            image_url: "/src/assets/images/sectionP1.png",
            value: "لینک به یه صفحه دیگه",
          },
        },
      ],
    },
  },
  {
    section: 2,
    elementId: "20001",
    data: {
      theme: "dark",
      children: [
        {
          parent: 1,
          elementId: "04000",
          data: {
            image_url: "",
          },
        },
        {
          parent: 2,
          elementId: "01002",
          data: {
            value: "سودِو",
          },
        },
        {
          parent: 3,
          elementId: "02001",
          data: {
            value: "توضیحات",
          },
        },
        {
          parent: 4,
          elementId: "03003",
          data: {
            value: "لینک",
            path: "/to-where",
          },
        },
        {
          parent: 5,
          elementId: "05000",
          data: {
            value: "لینک",
            style: {
              color: "hex",
            },
            onClick: "",
          },
        },
      ],
    },
  },
  {
    section: 3,
    elementId: "30001",
    data: {
      theme: "light",
      children: [
        {
          parent: 1,
          elementId: "01001",
          data: {
            value: "Title",
            color: "",
          },
        },
      ],
    },
  },
  {
    section: 4,
    elementId: "40001",
    data: {
      theme: "dark",
      children: [
        {
          parent: 1,
          elementId: "01003",
          data: {
            value: "Title 2",
          },
        },
      ],
    },
  },
];
