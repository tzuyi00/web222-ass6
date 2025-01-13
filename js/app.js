/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Tzuyi Lin
 *      Student ID: 127201234
 *      Date:       2024/11/01
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

let chosenArtist = artists.length > 1 ? artists[0] : null;

function createArtistsBar() {
  const menuElement = document.getElementById("menu");
  menuElement.innerHTML = "";

  // Create artists buttons
  artists.forEach((artist) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = artist.name;
    if (artist.artistId === chosenArtist.artistId) {
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
      buttonElement.addEventListener("click", () => {
        chosenArtist = artist;
        if (chosenArtist) {
          createArtistsBar();
          createSongTable();
        }
      });
    }

    menuElement.appendChild(buttonElement);
  });
}

function createSongTable() {
  // Dynamically update the selected category title
  const chosenArtistElement = document.getElementById("selected-artist");
  const linksHTML = chosenArtist.urls
    .map((url) => `<a href="${url.url}">${url.name}</a>`)
    .join(", ");
  chosenArtistElement.innerHTML = `${chosenArtist.name} (${linksHTML})`;

  // Clear the current rows
  const songsElement = document.getElementById("songs");
  songsElement.innerHTML = "";

  // Filter Songs Array
  const filteredSongs = songs.filter(
    (song) => chosenArtist.artistId.includes(song.artistId) && !song.explicit
  );

  // Create Table Rows
  filteredSongs.forEach((song) => {
    const songCard = createSongCard(song);

    songCard.addEventListener("click", () => {
      window.location.href = song.url;
    });

    songsElement.appendChild(songCard);
  });
}

function createSongCard(song) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImg = document.createElement("div");
  cardImg.classList.add("card_image");
  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;
  cardImg.appendChild(songImg);
  card.appendChild(cardImg);

  const content = document.createElement("div");
  content.classList.add("content");
  card.appendChild(content);

  const songTitle = document.createElement("h3");
  songTitle.innerText = song.title;
  content.appendChild(songTitle);

  const info = document.createElement("div");
  info.classList.add("info");
  content.appendChild(info);

  const songTime = document.createElement("span");
  songTime.textContent = song.year;
  info.appendChild(songTime);

  const songDuration = document.createElement("span");
  const min = parseInt(song.duration / 60);
  const sec = song.duration % 60;
  songDuration.textContent = `${min}:${sec > 9 ? sec : `0${sec}`}`;
  info.appendChild(songDuration);
  return card;
}

if (chosenArtist) {
  createArtistsBar();
  createSongTable();
}
