import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronDown,
  faBars,
  faShoppingCart,
  faTimes,
  faCheck,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

const iconList = [
  fab,
  faChevronLeft,
  faChevronDown,
  faBars,
  faShoppingCart,
  faTimes,
  faCheck,
  faTrash
];

library.add(...iconList);
