import { getBlog } from "./data"; 
import "./style.css";
const blogs = getBlog();
const ul =document.createElement("ul");
ul.classList.add("grid");

blogs.forEach(blog => {
    const li =document.createElement("li");
    li.textContent = blog;
    ul.appendChild(li);   
});
document.body.appendChild(ul);