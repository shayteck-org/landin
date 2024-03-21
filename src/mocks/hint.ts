type comp = {
  type: string;
  set: () => {};
  get: () => {};
};

interface image extends comp {
  type: "image";
  image: "x";
}

interface text extends comp {
  type: "text";
  text: "x";
}

const ele: image = {
  type: "image",
  image: "x",
  set() {
    return "hi i'm image";
  },
  get() {
    return "hi i'm get image";
  },
};

const elem: text = {
  type: "text",
  text: "x",
  set() {
    return "hi i'm text";
  },
  get() {
    return "hi i'm get text";
  },
};

const array = [ele, elem];

for (const c of array) {
  if (c.type === "image") {
    console.log(c.get());
  } else {
    console.log(c.get());
  }
}
