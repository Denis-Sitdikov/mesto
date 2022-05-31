import Card from "../components/Card.js";
import {elementTemplateClass} from "./constants.js";

export default function createCard(item, popupImg){
  const card = new Card({
    data: item,
    cardClick: (name, link) => {
      popupImg.open(name, link)
    }
  }, elementTemplateClass);
  
  return card.generateCard();
}