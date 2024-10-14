export function renderMainSection() {
    return `
      <section class="battle-section">
        <div class="wrapper">
          <h2>My Projects</h2>
          <div class="battles">
            ${renderBattle(
              "The Admin Dashboard",
              "../dist/assets/Admin-Dashboard.png",
              "https://abhishek-prasad-baheliya.github.io/Admin-Dashboard",
              "The Admin Dashboard is a comprehensive and intuitive platform designed to manage and oversee various projects and tasks efficiently."
            )}
            ${renderBattle(
              "The Small Library",
              "../dist/assets/Library.png",
              "https://abhishek-prasad-baheliya.github.io/Library-App/",
              "Welcome to the Small Library App! This application is designed to help manage a small library's collection, including books, authors, and users."
            )}
            ${renderBattle(
              "Tic Tac Toe Game",
              "../dist/assets/Tic-tac-toe.png",
              "https://abhishek-prasad-baheliya.github.io/Tic-Tac-Toe-Game/",
              "This project is a classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Players take turns placing X's and O's on a 3x3 grid, aiming to get three in a row, column, or diagonal"
            )}
            ${renderBattle(
              "The Photography Dashboard",
              "../dist/assets/Photography.png",
              "https://abhishek-prasad-baheliya.github.io/Photography-Dashboard/",
              "The Photography Dashboard project is a web application designed to streamline various aspects of a photographer's workflow. It provides a centralized platform for photographers to manage their portfolio, schedule appointments, track client communications, and handle administrative tasks. "
            )}
            ${renderBattle(
              "The siman Say Game",
              "../dist/assets/Siman-say-Game.png",
              "https://abhishek-prasad-baheliya.github.io/Simon-say-Game-/",
              " game where one person, Simon, gives commands preceded by Simon says. Participants must follow these commands, but if Simon doesn't say Simon says and someone follows the command, they're out. Last person standing wins. Tests listening and memory skills."
            )}
            ${renderBattle(
              "Etah A Sketch",
              "../dist/assets/sketch.png",
              "https://abhishek-prasad-baheliya.github.io/Etch-a-Sketch/",
              "This project is a digital rendition of the classic Etch-a-Sketch toy, built using HTML, CSS, and JavaScript. With this web-based version, users can create intricate drawings by moving a cursor around the screen, simulating the knobs of the physical toy."
            )}
            ${renderBattle(
              "The SignUp Form",
              "../dist/assets/sign-up-form.png",
              "https://abhishek-prasad-baheliya.github.io/Sign-up-Form/",
              "The Sign-up Form project is a web application component that allows users to register for a service or platform. It provides fields for users to input their information, such as name, email address, password, and any additional required details."
            )}
            ${renderBattle(
              "📝Todo List App",
              "../dist/assets/todoList.png",
              "https://abhishek-prasad-baheliya.github.io/Todo-List-Project/",
              "A simple, interactive, and responsive To-Do List application that helps users stay organized and productive by managing their daily tasks efficiently."
            )}
            ${renderBattle(
              "Rock Paper Scissors",
              "../dist/assets/rock.png",
              "https://abhishek-prasad-baheliya.github.io/Rock-Paper-Scissors/",
              "This is a simple implementation of the classic game Rock, Paper, Scissors using JavaScript. The game runs in the console, allowing you to play against the computer."
            )}
            ${renderBattle(
              "The 🍽️ Restaurant Page",
              "../dist/assets/restaurant.png",
              "https://abhishek-prasad-baheliya.github.io/Restaurant-Page/",
              "A modern, responsive Restaurant Website designed to showcase the restaurant's menu, ambiance, and services. This project aims to provide a smooth browsing experience and attract customers with an engaging design."
            )}            
          </div>
        </div>
      </section>
    `;
  }
  
  function renderBattle(title, imgSrc, link, standName) {
    return `
      <div class="battle-div box-shadow">
        <img src="${imgSrc}" alt="">
        <div class="battle-info">
          <div class="title">
            <h3>${title}</h3>
            <a href="${link}" target="_blank" class="fa fa-external-link"></a>
          </div>
          <h4>「${standName}」</h4>
          <p></p>
        </div>
      </div>
    `;
  }
  