// References to DOM
const menuRef = document.querySelector("#menu");

// Data
const menuItems = [
    {
        image: "https://reptichip.com/cdn/shop/articles/Best_substrate_for_an_American_Green_Tree_Frog_Hyla_cinerea_ReptiChip_d24066a3-e574-4ffd-8c25-e73a637b4765_1600x.png?v=1740691666",
        name: "frog",
    },
    {
        image: "https://ohiodnr.gov/wps/wcm/connect/gov/bb3c734b-71af-4768-8f07-7b43171c2f16/amphibian+american+toad+harfmann-HERO.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9I401S01H7F40QBNJU3SO1F56-bb3c734b-71af-4768-8f07-7b43171c2f16-nmk.g5Z",
        name: "toad",
    },
    {
        image:"https://today.uconn.edu/wp-content/uploads/2017/07/GettyImages-146798910-CubanTreeFrog.jpg",
        name: "frog 2",
    },
    {
        image: "https://nationalzoo.si.edu/sites/default/files/styles/wide/public/animals/fowlerstoad.jpg?itok=KFyT19ZX",
        name: "toad 2",
    },
];

menuRef.innerHTML = "";

for (let index = 0; index < menuItems.length; index++) {
    const item = menuItems[index];

    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHTML += newP;

    menuRef.appendChild(newArticle);
}