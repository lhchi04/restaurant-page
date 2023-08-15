import './style.css';
import Contact from './images/contact2.png';
import Food1 from './images/food1.png';
import Food2 from './images/food2.png';
import Food3 from './images/food3.png';
import Food4 from './images/food4.png';
import Food5 from './images/food5.png';
import Food6 from './images/food6.png';
import Food7 from './images/food7.png';
import Food8 from './images/food8.png';
import Food9 from './images/food9.png';
import Food10 from './images/food10.png';
import Food11 from './images/food11.png';
import Food12 from './images/food12.png';
import Food13 from './images/food13.png';
import Food14 from './images/food14.png';
import Food15 from './images/food15.png';
import Food16 from './images/food16.png';
import Food17 from './images/food17.png';
import Food18 from './images/food18.png';

const container = document.getElementById('content');
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
document.body.appendChild(buttonContainer);

const home = document.createElement('button');
home.classList.add('home-button');
home.textContent = 'HOME';
buttonContainer.appendChild(home);

const menu = document.createElement('button');
menu.classList.add('menu-button');
menu.textContent = 'MENU';
buttonContainer.appendChild(menu);

const contact = document.createElement('button');
contact.classList.add('contact-button');
contact.textContent = ' CONTACT';
buttonContainer.appendChild(contact);

function mainPage() {
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  container.appendChild(textContainer);
  const headline = document.createElement('h1');
  headline.textContent = 'A GUDETAMA RESTAURANT';
  textContainer.appendChild(headline);
  const welcome = document.createElement('h2');
  welcome.textContent = 'Welcome to our restaurant! Forget about your boring low-paid job and be lazy like Gudetama while we serve you the best food ever!';
  textContainer.appendChild(welcome);
  return container;
}

function menuPage() {
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'MENU';
  menuTitle.classList.add('title');
  container.appendChild(menuTitle);
  // Main dishes
  const menuMain = document.createElement('div');
  menuMain.classList.add('menu-main');
  const menuMainText = document.createElement('h2');
  menuMainText.textContent = 'Main Dishes';
  container.appendChild(menuMainText);
  container.appendChild(menuMain);
  const food1 = document.createElement('div');
  const food1Name = 'Curryegg';
  const food1Pic = new Image();
  food1Pic.src = Food1;
  const food1Price = document.createElement('h4');
  food1Price.textContent = '$10';
  food1.append(food1Pic, food1Name, food1Price);
  menuMain.append(food1);
  const food2 = document.createElement('div');
  const food2Name = 'Oyster Omlette';
  const food2Pic = new Image();
  food2Pic.src = Food2;
  const food2Price = document.createElement('h4');
  food2Price.textContent = '$12';
  food2.append(food2Pic, food2Name, food2Price);
  menuMain.append(food2);
  const food3 = document.createElement('div');
  const food3Name = 'Kamatama Udon';
  const food3Pic = new Image();
  food3Pic.src = Food3;
  const food3Price = document.createElement('h4');
  food3Price.textContent = '$13';
  food3.append(food3Pic, food3Name, food3Price);
  menuMain.append(food3);
  const food4 = document.createElement('div');
  const food4Name = 'Mt. Fujiggly';
  const food4Pic = new Image();
  food4Pic.src = Food4;
  const food4Price = document.createElement('h4');
  food4Price.textContent = '$13';
  food4.append(food4Pic, food4Name, food4Price);
  menuMain.append(food4);
  const food5 = document.createElement('div');
  const food5Name = 'Gude Tempura Bowl';
  const food5Pic = new Image();
  food5Pic.src = Food5;
  const food5Price = document.createElement('h4');
  food5Price.textContent = '$15';
  food5.append(food5Pic, food5Name, food5Price);
  menuMain.append(food5);
  const food6 = document.createElement('div');
  const food6Name = 'Foie Gras';
  const food6Pic = new Image();
  food6Pic.src = Food6;
  const food6Price = document.createElement('h4');
  food6Price.textContent = '$20';
  food6.append(food6Pic, food6Name, food6Price);
  menuMain.append(food6);

  //Special dishes
  const menuSpecial = document.createElement('div');
  menuSpecial.classList.add('menu-special');
  const menuSpecialText = document.createElement('h2');
  menuSpecialText.textContent = 'Special Dishes';
  container.appendChild(menuSpecialText);
  container.appendChild(menuSpecial);
  const food7 = document.createElement('div');
  const food7Name = '1st Anniversary';
  const food7Pic = new Image();
  food7Pic.src = Food7;
  const food7Price = document.createElement('h4');
  food7Price.textContent = '$15';
  food7.append(food7Pic, food7Name, food7Price);
  menuSpecial.append(food7);
  const food8 = document.createElement('div');
  const food8Name = '2nd Anniversary';
  const food8Pic = new Image();
  food8Pic.src = Food8;
  const food8Price = document.createElement('h4');
  food8Price.textContent = '$12';
  food8.append(food8Pic, food8Name, food8Price);
  menuSpecial.append(food8);
  const food9 = document.createElement('div');
  const food9Name = '3rd Anniversary';
  const food9Pic = new Image();
  food9Pic.src = Food9;
  const food9Price = document.createElement('h4');
  food9Price.textContent = '$15';
  food9.append(food9Pic, food9Name, food9Price);
  menuSpecial.append(food9);
  const food10 = document.createElement('div');
  const food10Name = '4th Anniversary';
  const food10Pic = new Image();
  food10Pic.src = Food10;
  const food10Price = document.createElement('h4');
  food10Price.textContent = '$20';
  food10.append(food10Pic, food10Name, food10Price);
  menuSpecial.append(food10);

  // Breakfast & snack
  const menuOther = document.createElement('div');
  menuOther.classList.add('menu-other');
  container.appendChild(menuOther);

  const menuBreakfastContainer = document.createElement('div');
  menuOther.appendChild(menuBreakfastContainer);
  const menuBreakfastText = document.createElement('h2');
  menuBreakfastText.textContent = 'Breakfast';
  menuBreakfastContainer.appendChild(menuBreakfastText);
  const menuBreakfast = document.createElement('div');
  menuBreakfast.classList.add('menu-breakfast');
  menuBreakfastContainer.appendChild(menuBreakfast);

  const menuSnackContainer = document.createElement('div');
  menuOther.appendChild(menuSnackContainer);
  const menuSnackText = document.createElement('h2');
  menuSnackText.textContent = 'Snacks';
  menuSnackContainer.appendChild(menuSnackText);
  const menuSnack = document.createElement('div');
  menuSnack.classList.add('menu-snack');
  menuSnackContainer.appendChild(menuSnack);
  
  const food11 = document.createElement('div');
  const food11Name = 'Bacon Egg (Layers)';
  const food11Pic = new Image();
  food11Pic.src = Food11;
  const food11Price = document.createElement('h4');
  food11Price.textContent = '$4';
  food11.append(food11Pic, food11Name, food11Price);
  menuBreakfast.append(food11);
  const food12 = document.createElement('div');
  const food12Name = 'Hot Bun Pillow';
  const food12Pic = new Image();
  food12Pic.src = Food12;
  const food12Price = document.createElement('h4');
  food12Price.textContent = '$4';
  food12.append(food12Pic, food12Name, food12Price);
  menuBreakfast.append(food12);
  const food13 = document.createElement('div');
  const food13Name = 'Slovenly gudetama';
  const food13Pic = new Image();
  food13Pic.src = Food13;
  const food13Price = document.createElement('h4');
  food13Price.textContent = '$5';
  food13.append(food13Pic, food13Name, food13Price);
  menuBreakfast.append(food13);
  const food14 = document.createElement('div');
  const food14Name = 'Gude Banh Mi';
  const food14Pic = new Image();
  food14Pic.src = Food14;
  const food14Price = document.createElement('h4');
  food14Price.textContent = '$7';
  food14.append(food14Pic, food14Name, food14Price);
  menuBreakfast.append(food14);
  const food15 = document.createElement('div');
  const food15Name = 'Gudetama Sailor';
  const food15Pic = new Image();
  food15Pic.src = Food15;
  const food15Price = document.createElement('h4');
  food15Price.textContent = '$7';
  food15.append(food15Pic, food15Name, food15Price);
  menuSnack.append(food15);
  const food16 = document.createElement('div');
  const food16Name = 'Pudding Shaved Ice';
  const food16Pic = new Image();
  food16Pic.src = Food16;
  const food16Price = document.createElement('h4');
  food16Price.textContent = '$10';
  food16.append(food16Pic, food16Name, food16Price);
  menuSnack.append(food16);
  const food17 = document.createElement('div');
  const food17Name = 'Rainbow Cake';
  const food17Pic = new Image();
  food17Pic.src = Food17;
  const food17Price = document.createElement('h4');
  food17Price.textContent = '$12';
  food17.append(food17Pic, food17Name, food17Price);
  menuSnack.append(food17);
  const food18 = document.createElement('div');
  const food18Pic = new Image();
  food18Pic.src = Food18;
  const food18Name = 'Eleggance';
  const food18Price = document.createElement('h4');
  food18Price.textContent = '$18';
  food18.append(food18Pic, food18Name, food18Price);
  menuSnack.append(food18);

  for (const food of menuMain.querySelectorAll('div')) {
    food.classList.add('food');
  }
  for (const food of menuSpecial.querySelectorAll('div')) {
    food.classList.add('food');
  }
  for (const food of menuBreakfast.querySelectorAll('div')) {
    food.classList.add('food');
  }
  for (const food of menuSnack.querySelectorAll('div')) {
    food.classList.add('food');
  }
  return container;
}

function contactPage() {
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'CONTACT';
  contactTitle.classList.add('title');
  container.appendChild(contactTitle);
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  container.appendChild(contactContainer);
  const contactInfo = document.createElement('h3');
  contactInfo.textContent = 'gudetama@dontmailme.com';
  const contactPic = new Image();
  contactPic.src = Contact;
  const contactQuote = document.createElement('h3');
  contactQuote.textContent = 'Yeah I have contacts but I barely pick up my phone cuz I\'m too lazy.. Meh';
  contactContainer.append(contactInfo, contactPic, contactQuote);
  return container;
}

function clear() {
  container.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
  home.click(); 
});

menu.addEventListener('click', () => {
  clear();
  document.body.appendChild(menuPage());
  // menuPage().querySelector('.title').style.opacity = '1';
})
contact.addEventListener('click', () => {
  clear();
  document.body.appendChild(contactPage());
  // menuPage().querySelector('.title').style.opacity = '1';
})
home.addEventListener('click', () => {
  clear();
  document.body.appendChild(mainPage());
  // menuPage().querySelector('.text-container').style.opacity = '1';
})




