import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.png",
  "./houseDrawings/house2.png",
  "./houseDrawings/house3.png",
  "./houseDrawings/house4.png",
  "./houseDrawings/house5.png",
  "./houseDrawings/house6.png",
  "./houseDrawings/house8.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>
    <section id="projects">
      <p id="lol">01: CADAVRE EXQUIS / building wisdom </p>
      <div id="project-row">
        <div class="three-model">
          <a href="./houseDrawings/house0.png" target="_blank"> 
          <img src="./houseDrawings/house0.png" id="house" alt="House Image">
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./houseDrawings/house1.png" target="_blank">
              <img src="./houseDrawings/house1.png" alt="house1" />
            </a>
            <a href="./houseDrawings/house2.png" target="_blank">
              <img src="./houseDrawings/house2.png" alt="house2" />
            </a>
            <a href="./houseDrawings/house3.png" target="_blank">
              <img src="./houseDrawings/house3.png" alt="house3" />
            </a>
            <a href="/houseDrawings/house4.png" target="_blank">
              <img src="./houseDrawings/house4.png" alt="house4" />
            </a>
            <a href="houseDrawings/house5.png" target="_blank">
              <img src="./houseDrawings/house5.png" alt="house5" />
            </a>
            <a href="houseDrawings/house6.png" target="_blank">
              <img src="./houseDrawings/house6.png" alt="house6" />
            </a>
            <a href="houseDrawings/house8.png" target="_blank">
              <img src="./houseDrawings/house8.png" alt="house8" />
            </a>
          </div>
        </div>
      </div>
      <h4 id="description"> This visual exploration delves into the application of knowledge in design and its power in shaping urban contexts, for better or worse. Design can foster agency, curiosity, and belonging, yet can also be disruptive, diminishing, and harmful. Through sketching, iterating, and returning to intention, I reflected on themes of equity and sustainability, and drew on both local and global examples. This process deepened my understanding of how knowledge application in design shapes our world, and highlighted a vital need for wisdom and care in our steps forward.</h4>
    </div>





    <p id="lol">02: INTEROP(ERABILITY) / discovery </p>
    <p> </p>
    <div id="project-row">
      <div class="three-model">
         <div id="model1"></div>
      </div>
      <div class="three-model">
         <div id="model2"></div>
      </div>
      <div class="three-model">
         <div id="model3"></div>
      </div>
    </div>    
    <div id="project-row">
      <div class="three-model">
         <div id="model4"></div>
      </div>
      <div id="images-description">
          <div id="images">
            <a href="./a2images/torus.png" target="_blank">
              <img src="./a2images/torus.png" alt="torus" />
            </a>
          </div>
        </div>
      </div> 
      <h4 id="description"> This visual exploration delves into the application of knowledge in design and its power in shaping urban contexts, for better or worse. Design can foster agency, curiosity, and belonging, yet can also be disruptive, diminishing, and harmful. Through sketching, iterating, and returning to intention, I reflected on themes of equity and sustainability, and drew on both local and global examples. This process deepened my understanding of how knowledge application in design shapes our world, and highlighted a vital need for wisdom and care in our steps forward.</h4>
    </div>


    


    </section>





    
      ${/* Model 2 commented out
      <div id="project-row">
      A2: Interoperability
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */ ''}
      ${/* Model 3 commented out
      <div id="project-row">
      A3: Object Design
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */ ''}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li style="display:none">LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project2/pavilion.obj");
createThreeScene("#model2", "/3DModels/project2/torus.obj");
createThreeScene("#model3", "/3DModels/project2/low_poly.obj");
createThreeScene("#model4", "/3DModels/project2/character.obj");