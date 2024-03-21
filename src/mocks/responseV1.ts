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
  {
    section: 2,
    elementId: "20001",
    data: {
      sectionTitle: {
        elementId: "02001",
        data: {
          value: `خدمات ما`,
        },
      },
      title: {
        elementId: "01001",
        data: {
          value:
            "ما خدمات بسیار خوبی را برای مشتریان خود بر اساس نیاز آنها ارائه می دهیم",
        },
      },
      content: [
        {
          data: {
            id: "1635116846444634864",
            title: {
              data: {
                value: "محتوا نویسی",
              },
            },
            description: {
              data: {
                value:
                  "ت و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
              },
            },
            image: {
              data: {
                image_url: "/sectionP1.png",
              },
            },
            link: {
              data: {
                path: "/another-page",
              },
            },
            style: {
              bgColor: "#F64B4B",
            },
          },
        },
        {
          data: {
            id: "16351168464453294864",
            title: {
              data: {
                value: "محتوا نویسی",
              },
            },
            description: {
              data: {
                value:
                  "ت و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
              },
            },
            image: {
              data: {
                image_url: "/sectionP1.png",
              },
            },
            link: {
              data: {
                path: "/another-page",
              },
            },
            style: {
              bgColor: "#473BF0",
            },
          },
        },
        {
          data: {
            id: "16325478461884484694864",
            title: {
              data: {
                value: "محتوا نویسی",
              },
            },
            description: {
              data: {
                value:
                  "ت و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
              },
            },
            image: {
              data: {
                image_url: "/sectionP1.png",
              },
            },
            link: {
              data: {
                path: "/another-page",
              },
            },
            style: {
              bgColor: "#68D585",
            },
          },
        },
      ],
    },
  },
  {
    section: 3,
    elementId: "30001",
    data: {
      content: [
        {
          data: {
            id: "61561651",
            image: {
              data: {
                image_url: "/sectionP1.png",
                value: "alt text",
              },
            },
            rate: {
              data: {
                star_count: 4.25,
              },
            },
            comment: {
              data: {
                value:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
              },
            },
            author: {
              data: {
                value: "کیانمهر رعنایی",
              },
            },
          },
        },
        {
          data: {
            id: "61213561651",
            image: {
              data: {
                image_url: "/sectionP1.png",
                value: "alt text",
              },
            },
            rate: {
              data: {
                star_count: 5,
              },
            },
            comment: {
              data: {
                value:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
              },
            },
            author: {
              data: {
                value: "امیرممد",
              },
            },
          },
        },
      ],
    },
  },
  {
    section: 4,
    elementId: "40001",
    data: {
      sectionTitle: {
        data: {
          value: "درباره ی ما",
        },
      },
      descriptionOne: {
        data: {
          value:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        },
      },
      descriptionTwo: {
        data: {
          value:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
        },
      },
      imageOne: {
        data: {
          value: "یه متن جایگزین",
          image_url: "./person1.png",
        },
      },
      imageTwo: {
        data: {
          value: "یه متن جایگزین",
          image_url: "./person2.png",
        },
      },
      imageThree: {
        data: {
          value: "یه متن جایگزین",
          image_url: "./person3.png",
        },
      },
    },
  },
];
