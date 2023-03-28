import { members } from '../js/data/dataMembers.js';

const templateCards = document.querySelector(".template-cards");
const fragmentMembers = document.createDocumentFragment();
const containerCards = document.querySelector('.container__cards');


const showCards = () => {
    members.forEach((item) => {
        const clone = templateCards.content.cloneNode(true);

        clone.querySelector(".member-img").src = item.img;
        clone.querySelector(".member-img").alt = item.memberName;
        clone.querySelector("h3").textContent = item.memberName;

        fragmentMembers.appendChild(clone);
    })

    containerCards.appendChild(fragmentMembers);
}
showCards();