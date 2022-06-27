import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";
import { Score } from "./Score.mjs";

const score = new Score("score");

/**
 * A partir de um id cria uma zona de drop.
 * @param {String} trash_id id html da lixeira. Ex: #trashPapel
 */
function dropzone(trash_obj) {
  interact(trash_obj.trash_id)
    .dropzone({
      accept: trash_obj.acceptable_class,
      overlap: 1,
      ondrop: (event) => {
        let draggableElement = event.relatedTarget;
        score.earn_score(1000, 1);
        draggableElement.remove();
      },
    })
    .on("hold", (_event) => {
      console.log(
        "Ao precionar a lixeira, deve aparecer alguns exemplos de lixos compativeis"
      );
    });
}

/**
 *  Torna um objeto arrastável
 * @param {String} obj_id id html do lixo. Ex: #objPapel
 */
function draggable(obj_id) {
  interact(obj_id).draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "#main",
      }),
    ],
    listeners: { move: dragMoveListener },
  });
}

function dragMoveListener(event) {
  let target = event.target;
  // calcula a positção final do objeto
  let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // realiza a mudança visual do objeto, através de uma transformação
  target.style.transform = `translate(${x}px, ${y}px)`;

  // atualiza a posição do objeto
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

export { dropzone, draggable };
