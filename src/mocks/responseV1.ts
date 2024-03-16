import { onClickModel } from "@/types/model";

export const responseV1 = [
  {
    section: 0,
    elementId: "00000",
    data: {
      links: [
        {
          home: {
            data: {
              value: "خانه",
              path: "#",
            },
          },
          services: {
            data: {
              value: "سرویس ها",
              path: "#services",
            },
          },
          resume: {
            data: {
              value: "نمونه کار ها",
              path: "#resume",
            },
          },
          contact: {
            data: {
              value: "ارتباط با ما",
              path: "#contact",
            },
          },
        },
      ],
      button: {
        elementId: "05003",
        data: {
          value: "تماس با ما",
          style: {
            bgColor: "#473BF0",
          },
          onClick: onClickModel.openDialog1,
        },
      },
    },
  },
  {
    section: 1,
    elementId: "10001",
    data: {
      title: {
        elementId: "01001",
        data: {
          value: `سودِو\n خلق کسب و کار راحت`,
        },
      },
      description: {
        elementId: "02001",
        data: {
          value:
            "ایجاد کسب و کار در این دنیا نیاز به دانش عمیق در حوضه شبکه و مارتینگ داره , این مورد را به ما بسپارید",
        },
      },
      button: {
        elementId: "05003",
        data: {
          value: "ثبت درخواست",
          style: {
            bgColor: "#473BF0",
          },
          onClick: onClickModel.openDialog2,
        },
      },
      image: {
        elementId: "04003",
        data: {
          image_url: "/sectionP1.png",
          value: "لینک به یه صفحه دیگه",
        },
      },
    },
  },
];
