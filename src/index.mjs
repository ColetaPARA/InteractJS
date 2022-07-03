import { dropzone, draggable } from "./DragDrop.mjs";

const trashs = [
  {
    trash_id: "#trashPlastico",
    acceptable_class: ".objPlastico",
  },
  {
    trash_id: "#trashMetal",
    acceptable_class: ".objMetal",
  },
  {
    trash_id: "#trashPapel",
    acceptable_class: ".objPapel",
  },
  {
    trash_id: "#trashOrganico",
    acceptable_class: ".objOrganico",
  },
  {
    trash_id: "#trashVidro",
    acceptable_class: ".objVidro",
  },
];

trashs.forEach((trash) => {
  dropzone(trash);
});

draggable(".lixo");