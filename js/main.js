const main = document.getElementsByTagName("main")[0];
const modalContainer = document.getElementsByClassName("modal-container")

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) =>
    result.map((user) => {
      const divCard = document.createElement("div");
      divCard.setAttribute("class", "user-card-container");
      const divCardCover = document.createElement("div");
      divCardCover.setAttribute("class", "divCard-cover");
      divCard.appendChild(divCardCover);

      main.append(divCard);

      //profile img
      const imgContainer = document.createElement("div");
      imgContainer.setAttribute("class", "img-container");
      divCard.append(imgContainer);

      const imgUserAvatar = document.createElement("img"); 
      imgUserAvatar.src = "images/pfp.png";
      imgContainer.appendChild(imgUserAvatar);
      
      //card content div
      const cardContentDiv = document.createElement("div");
      cardContentDiv.setAttribute("class","content-div");
      divCard.appendChild(cardContentDiv);


      
      //user title
      const title = document.createElement("h1");
      title.setAttribute("class", "user-title")
      title.append(user.name);
      cardContentDiv.append(title);
      

      //const user paragraph
      const description = document.createElement("p");
      description.setAttribute("class", "user-description");
      description.append("Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error veritatis.")
      cardContentDiv.append(description)

      //contact container
      const contactInfoContainer = document.createElement("div");
      contactInfoContainer.setAttribute("class", "contact-div");
      divCard.append(contactInfoContainer);

      //user email
      const email = document.createElement("p");
      email.setAttribute("class", "user-email");
      email.append("Email: " + user.email);
      contactInfoContainer.append(email);

      //user number
      const phoneNumber = document.createElement("p");
      phoneNumber.setAttribute("class", "user-number")
      phoneNumber.append("Phone Number: " + user.phone);
      contactInfoContainer.append(phoneNumber);


      //modal
      const modalClose = document.querySelector(".close-icon");
      const modal = document.getElementsByClassName("div-modal-display")[0];
      const handleModalOpen = () => {
        modal.style.display = "flex";
      };

      const handleModalClose = () => {
        modal.style.display = "none";
      }
      

      divCard.addEventListener("click", handleModalOpen);
      modalClose.addEventListener("click", handleModalClose);
    })
  );
