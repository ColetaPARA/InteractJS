import { dropzone, draggable } from "./DragDrop.mjs";

const trashs = [
  {
    trash_id: "#trashPlastico",
    acceptable_class: ".lixo",
  },
  {
    trash_id: "#trashMetal",
    acceptable_class: ".lixo",
  },
  {
    trash_id: "#trashPapel",
    acceptable_class: ".lixo",
  },
  {
    trash_id: "#trashOrganico",
    acceptable_class: ".lixo",
  },
  {
    trash_id: "#trashVidro",
    acceptable_class: ".lixo",
  },
];

trashs.forEach((trash) => {
  dropzone(trash);
});

draggable(".lixo");