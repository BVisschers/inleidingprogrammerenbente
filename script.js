console.log("hallo wereld");

/* Const om de achtergrond aan te passen - met behulp van Berry */
const veranderCafe = document.querySelector("#cafe_knop");
const veranderBakkerij = document.querySelector("#bakkerij_knop");
const veranderKeuken = document.querySelector("#keuken_knop");
const achtergrondKnop = document.querySelector("#achtergrond_knop");

/* Const om de grote cupcake (links) aan te passen/ versieren */
const hoofdCupcake = document.querySelector("#leeg_vormpje");
const hoofdVanille = document.querySelector("#vanille_groot");
const hoofdChocolade = document.querySelector("#chocolade_groot");

const vanilleToevoegen = document.querySelector("#vanille_basis");
const chocoladeToevoegen = document.querySelector("#chocolade_basis");

/* Const cupcake (links) versieren met onderdelen uit het menu*/
let vanilleToefje = document.querySelector("#vanille_toefje");
let chocoladeToefje = document.querySelector("#chocolade_toefje");
let aardbeiToefje = document.querySelector("#aardbei_toefje");
let framboosToefje = document.querySelector("#framboos_toefje");

let vanilleMenu = document.querySelector("#vanille_menu");
let chocoladeMenu = document.querySelector("#chocolade_menu");
let aardbeiMenu = document.querySelector("#aardbei_menu");
let framboosMenu = document.querySelector("#framboos_menu");

let hartjeDeco = document.querySelector("#hartje_deco");
let smartiesDeco = document.querySelector("#smarties_deco");
let marshmellowDeco = document.querySelector("#marshmellow_deco");
let witteChocoladeDeco = document.querySelector("#witte_chocolade_deco");

let hartjeMenu = document.querySelector("#hartje_menu");
let smartiesMenu = document.querySelector("#smarties_menu");
let marshmellowMenu = document.querySelector("#marshmellow_menu");
let witteChocoladeMenu = document.querySelector("#witte_chocolade_menu");

let badgeRozeDeco = document.querySelector("#badge_roze_deco");
let badgeLimeKleurDeco = document.querySelector("#badge_lime_kleur_deco");
let badgeSterDeco = document.querySelector("#badge_ster_deco");

let badgeRozeMenu = document.querySelector("#badge_roze_menu");
let badgeLimeKleurMenu = document.querySelector("#badge_lime_kleur_menu");
let BadgeSterMenu = document.querySelector("#badge_ster_menu");

/* Var om een naam in beeld te laten verschijnen*/
var naamveld = document.querySelector("#naamveld");

/* Function voor het uitvoeren van de naam in beeld*/
function groet(naam) {
  console.log("groet persoon");
  naamveld.textContent = naam;
}

groet("Bente");

/* Function om de hint in beeld te laten zien*/
function showHint() {
  hint.textContent = "Klik op de decoratie om de cupcake te versieren";
  setTimeout(hideHint, 4000);
}

function hideHint() {
  hint.textContent = "";
}

showHint();

/* Function om de onderkant van de cupcake (het bakje) te veranderen*/
function onderkantVeranderen() {
  hoofdVanille.classList.add("zichtbaar");
  hoofdVanille.classList.remove("onzichtbaar");
  hoofdCupcake.classList.add("onzichtbaar");
}

vanilleToevoegen.addEventListener("click", onderkantVeranderen);

function onderkantVeranderen2() {
  hoofdChocolade.classList.add("zichtbaar");
  hoofdChocolade.classList.remove("onzichtbaar");
  hoofdCupcake.classList.add("onzichtbaar");
}

chocoladeToevoegen.addEventListener("click", onderkantVeranderen2);

function onderkantVeranderen3() {
  hoofdVanille.classList.add("zichtbaar");
  hoofdVanille.classList.remove("onzichtbaar");
  hoofdChocolade.classList.add("onzichtbaar");
}

vanilleToevoegen.addEventListener("click", onderkantVeranderen3);

function onderkantVeranderen4() {
  hoofdChocolade.classList.add("zichtbaar");
  hoofdChocolade.classList.remove("onzichtbaar");
  hoofdVanille.classList.add("onzichtbaar");
}

chocoladeToevoegen.addEventListener("click", onderkantVeranderen4);

/* If - else + audio chatGPT - prompt: maak een if else met audio eraan vast, als je dan op een knop klikt speelt het af en stopt het. 
Tweede zoekopdracht,hoe zorg ik ervoor dat deze knop alleen afspeelt als mijn cupcake versierd is.*/
function isCupcakeOpgemaakt() {
  const decoratieElementen = document.querySelectorAll('.show');
  return decoratieElementen.length > 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const audioKnop = document.getElementById("audioKnop");
  const audioControlButton = document.getElementById("audioControlButton");

  audioControlButton.addEventListener("click", () => {
    if (!isCupcakeOpgemaakt()) {
      alert('Versier eerst de cupcake voordat je kunt afronden :)');
      return;
    }

    if (audioKnop.paused) {
      audioKnop.play();
      audioControlButton.src = "images/stop_button.png";
      audioControlButton.alt = "Stop audio/ knop";
    } else {
      audioKnop.pause();
      audioControlButton.src = "images/button.png";
      audioControlButton.alt = "Speel audio/ knop af";
    }
  });
});

/* EventListener om de achtergronden te veranderen - hulp van berry */
/*https://www.pexels.com/nl-nl/foto/lege-bar-gevuld-met-lichten-260922/*/
veranderCafe.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(images/achtergrond_cafe.png)";
});

/*https://www.pexels.com/nl-nl/foto/zak-op-hout-naast-gekookt-brood-2007350/*/
veranderBakkerij.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(images/achtergrond_bakkerij.png)";
});

/*https://www.pexels.com/nl-nl/foto/handen-mensen-tafel-keuken-7489005/*/
veranderKeuken.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(images/achtergrond_keuken.png)";
});

achtergrondKnop.addEventListener("click", () => {
  document.body.style.backgroundImage = "url(images/achtergrond_normaal.png)";
});

/* EventLisener om de decoraties in het menu te toggelen */
vanilleMenu.addEventListener("click", () => {
  vanilleToefje.classList.toggle("show");
});

chocoladeMenu.addEventListener("click", () => {
  chocoladeToefje.classList.toggle("show");
});

aardbeiMenu.addEventListener("click", () => {
  aardbeiToefje.classList.toggle("show");
});

framboosMenu.addEventListener("click", () => {
  framboosToefje.classList.toggle("show");
});


hartjeMenu.addEventListener("click", () => {
  hartjeDeco.classList.toggle("show");
});

smartiesMenu.addEventListener("click", () => {
  smartiesDeco.classList.toggle("show");
});

marshmellowMenu.addEventListener("click", () => {
  marshmellowDeco.classList.toggle("show");
});

witteChocoladeMenu.addEventListener("click", () => {
  witteChocoladeDeco.classList.toggle("show");
});


badgeRozeMenu.addEventListener("click", () => {
  badgeRozeDeco.classList.toggle("show");
});

badgeLimeKleurMenu.addEventListener("click", () => {
  badgeLimeKleurDeco.classList.toggle("show");
});

BadgeSterMenu.addEventListener("click", () => {
  badgeSterDeco.classList.toggle("show");
});


