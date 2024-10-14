export function renderMainSection() {
    return `
      <section class="battle-section">
        <div class="wrapper">
          <h2>My Projects</h2>
          <div class="battles">
            ${renderBattle(
              "Todo List",
              "../dist/assets/todoList.png",
              "https://jojowiki.com/SO_Episode_2",
              "Goo Goo Dolls"
            )}
            ${renderBattle(
              "vs. JOHNGALLI A.",
              "imgs/johngallia.jpg",
              "https://jojowiki.com/SO_Episode_3",
              "Manhattan Transfer"
            )}
            ${renderBattle(
              "vs. F.F.",
              "imgs/ff.jpg",
              "https://jojowiki.com/SO_Episode_8",
              "Foo Fighters"
            )}
            <!-- Add more battles similarly -->
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      </div>
    `;
  }
  