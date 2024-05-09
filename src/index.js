import handler from "./handlers";
import weatherIMG from "./assets/images/space.png"
import styles from "./style.css"; 

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main"); 
  const header = main.querySelector(".top-header"); 
  const img = document.createElement("img"); 
  img.src = weatherIMG; 

  header.appendChild(img);
  handler.load();
});
