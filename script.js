const data = {
  mainTitle: "My Topmost Programming Languages",
  cardContents: [
    {
      name: "HTML",
      imageLink:
        "https://acumbamail.com/blog/wp-content/uploads/2014/10/maquetacion-email-html.png",
    },
    {
      name: "CSS",
      imageLink:
        "https://cdn.educba.com/academy/wp-content/uploads/2020/09/CSS-Viewport.jpg",
    },
    {
      name: "Python",
      imageLink:
        "https://www.crio.do/blog/content/images/2021/03/Python-projects.png",
    },
    {
      name: "JavaScript",
      imageLink:
        "https://www.crio.do/blog/content/images/2021/06/Javascript-projects-for-beginners-1.png",
    },
  ],
  userData: { name: "Bolaji M. A.", tagLine: "Adigson; may your story bring glory into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
