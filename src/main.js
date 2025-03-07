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
    </div>
    <h4 id="description"> This visual exploration delves into the application of knowledge in design and its power in shaping urban contexts, for better or worse. Design can foster agency, curiosity, and belonging, yet can also be disruptive, diminishing, and harmful. Through sketching, iterating, and returning to intention, I reflected on themes of equity and sustainability, and drew on both local and global examples. This process deepened my understanding of how knowledge application in design shapes our world, and highlighted a vital need for wisdom and care in our steps forward.</h4>






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
        <div id="images">
          <a href="./a2images/front.png" target="_blank">
            <img class="square" src="./a2images/front.png" alt="front" />
          </a>
          <a href="./a2images/side.png" target="_blank">
            <img class="square" src="./a2images/side.png" alt="side" />
          </a>
          <a href="./a2images/back.png" target="_blank">
            <img class="square" src="./a2images/back.png" alt="back" />
          </a>
          <a href="./a2images/paper1.png" target="_blank">
            <img class="square" src="./a2images/paper1.png" alt="paper1" />
          </a>
          <a href="./a2images/paper2.png" target="_blank">
            <img class="square" src="./a2images/paper2.png" alt="paper2" />
          </a>
          <a href="./a2images/paper3.png" target="_blank">
            <img class="square" src="./a2images/paper3.png" alt="paper3" />
          </a>
        </div>
      </div>
      <h4 id="description"> This project introduced me to opportunities with interoperability-based workflows between Blender and Rhino, where I explored mesh and NURBS modelling. Through experimentation with geometric functions in Rhino, I gained insights into how these tools complement each other for flexible, iterative design, as well as precise, final-stage modelling.</h4>
    </div>
    <div id="project-row">   
      <div id="images-4">
        <a href="./a2images/board1.png" target="_blank">
          <img class="board" src="./a2images/board1.png" alt="board1" />
        </a>
        <a href="./a2images/board2.png" target="_blank">
          <img class="board" src="./a2images/board2.png" alt="board2" />
        </a>
        <a href="./a2images/board3.png" target="_blank">
          <img class="board" src="./a2images/board3.png" alt="board3" />
        </a>
        <a href="./a2images/board4.png" target="_blank">
          <img class="board" src="./a2images/board4.png" alt="board4" />
        </a>
      </div>
    </div>
    <h4 id="reflection-title">reflection<br></h4>
    <h4 id="reflection">
      This was my first experience being introduced to “interoperability” and it was intriguing to see the limitless possibilities it can offer. I learned that interoperability is a computational process that translates low-level geometric data and typologies into visual forms that can be manipulated across modelling software. In this assignment, I became familiarized with the workflow between Blender and Rhino and engaged with the complexities of high and low-poly modelling.
      <br><br>Through each object’s analysis, I began to understand the complexities and methods of deconstructing structure and composition. I noticed how simple functions could drastically alter polygon networks and mesh systems in a much more efficient and accurate way than attempting to do it manually. In particular, I noted the differences between mesh and NURBS modelling. Mesh modelling allows for increased fluidity and high level gestures, which is useful for exploring sketch iterations in Blender and organic forms. Contrastingly, NURBS (Non-Uniform Rational B-Splines) modelling is precise, defined, and accurate, ideal for finalizing a design and ensuring models are organized and clean. 
      <br><br>As this was my first time engaging with these tools and workflows, I was intrigued by the process, and found it both challenging and rewarding. It charged me to look at geometry differently, moving through the constructing and deconstructing phases to gain a meaningful understanding of the layers involved. I was amazed at the computer system’s ability to simplify growing complexities and I look forward to utilizing these tools further, in my future academic and professional work. In terms of future applications, I would like to explore possibilities in the mesh modelling for pavilion design exploration, and utilize NURBS modelling for urban furniture that can support community interaction while integrating parametric design in everyday life. I look forward to continuing to build on these skills in both Blender and Rhino, and applying them in my graphics and studio courses. 
      <br><br>In conclusion, this exercise was a valuable introduction to mesh and NURBS modelling and provided me with a new way of perceiving geometry and understanding how these tools complement each other. The workflow between Blender and Rhino was versatile and efficient– something that will be increasingly beneficial as designs grow in complexity. I am eager to see further potential of interoperability and apply these core skills in my future design work.
    </h4>
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