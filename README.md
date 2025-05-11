# Music Discovery Web App 🎵

This is a client-side web application that presents a music discovery experience. Users can explore artists and songs within a chosen genre, interact with dynamically generated content, and submit form-based interactions like newsletter signup and artist suggestions.

🔗 **Live Demo:**  
👉 [https://ass6-seven.vercel.app/](https://ass6-seven.vercel.app/)

---

## 🛠️ Technologies Used

- **HTML5** semantic markup
- **CSS3** (with Flexbox & custom styling)
- **Vanilla JavaScript**
- **DOM manipulation**
- **HTML5 Audio/Video Embeds**
- **Datalist, Dynamic Inputs, and Form Validation**
- **Vercel** for deployment

---

## 🔐 Key Features

### General Users:
- Explore artists and view song cards by category
- View artist social media links and listen to sample songs
- Responsive UI with flexible layout and media integration

### Interactive Forms:
- **Newsletter Signup** (Footer):
  - Includes email validation
  - Simulated POST to `https://httpbin.org/post`

- **Request New Artist** (Separate Page):
  - Enter artist name, genre (with autocomplete), multiple links
  - Dynamically add more fields for songs/videos
  - Checkbox for explicit content
  - Submit reasoning for adding the artist
  - Full form validation and layout responsiveness

---

## 📂 Folder Structure

```
/src
  ├── index.html               --> Main app page
  ├── request.html             --> New artist request form
  ├── songs.js                 --> Song data with media links
  ├── artists.js               --> Artist data with metadata
  ├── app.js                   --> Core logic for DOM and interactivity
  ├── style.css                --> Custom CSS styles
  └── assets/                  --> Image/media assets
```

---

## 🚀 Setup & Run Locally

```bash
# Clone this repo
git clone https://github.com/your-username/music-app.git
cd music-app

# Install dependencies
npm install

# Run local development server
npm start

# Open your browser
http://localhost:8080
```

---

## 📌 Notes

- Songs and artists are displayed using custom-designed cards.
- Explicit content is filtered from display automatically.
- All forms are built with accessibility and usability in mind.
- Hosting is done via [Vercel](https://vercel.com).
