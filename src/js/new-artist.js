/**
 * WEB222 – Assignment 06
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
 *      Date:       2024/11/29
 */

function addNewSong() {
  const newInput = document.createElement("input");
  newInput.type = "url";
  newInput.name = "songUrls";
  newInput.required = true;
  newInput.placeholder = "https://music.com";
  return newInput;
}

document.addEventListener("DOMContentLoaded", function () {
  const songUrlsContainer = document.getElementById("songUrlBox");
  const addMoreButton = document.getElementById("add_song");

  addMoreButton.addEventListener("click", () => {
    const input = addNewSong();
    songUrlsContainer.appendChild(input);
  });
});
