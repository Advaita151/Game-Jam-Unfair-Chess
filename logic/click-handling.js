const allSquares = document.getElementsByClassName("square");

const clickedElements =[];

for (const x of allSquares) {
  x.addEventListener("click", function () {

    console.log(clickedElements);

    const idOfElement = x.getAttribute("id");
    const innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;

    if(clickedElements.length>0){
      clickedElements[0].removeAttribute("Style");
      clickedElements.length = 0;
    }

    if (
      innerHtmlOfElement.includes('Black') ||
      innerHtmlOfElement.includes('White')
    ) {
      document.getElementById(idOfElement).style.backgroundColor = "skyblue";
      clickedElements.push(x);
    }
  });
}
