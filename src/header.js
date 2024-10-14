// header.js
export function renderHeader() {
    return `
      <header class="header">
        <div class="style-wrapper">
          <div class="style-layer red skew box-shadow">
            <div class="style-layer orange anim-layer">
              <div class="style-layer yellow anim-layer">
                <div class="style-layer green anim-layer">
                  <div class="style-layer blue anim-layer">
                    <div class="style-layer purple anim-layer">
                      <div class="style-layer blue-main anim-layer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="img-wrapper">
            <img src="../dist/assets/profiile_image.jpeg" alt="">
            <h1>ABHISHEK</h1>
          </div>
          <div class="about-me">
            <h2>About Me</h2>
            <p>Hello! I'm <strong>ABHISHEK PRASAD</strong>, a passionate software engineer currently pursuing a degree in engineering. With a keen interest in web development, I have hands-on experience in creating dynamic and interactive projects using HTML, CSS, JavaScript, and Webpack. I'm always eager to learn and explore new technologies, and currently, I'm expanding my skills in Python programming and Data Structures & Algorithms.</p>
            <div class="social-icons">
              <a href="https://github.com/ABHISHEK-PRASAD-BAHELIYA" class="fa fa-github"></a>
              <a href="https://www.linkedin.com/in/abhishek-prasad-baheliya/" class="fa fa-linkedin"></a>
              <a href="https://x.com/74401Abhishek" class="fa fa-twitter"></a>
            </div>
          </div>
        </div>
      </header>
    `;
  }
  