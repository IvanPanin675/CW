import logo from '../photo.jpg';

export const AboutMe = () => {
  return (
    <main className="MainAboutMe">
      <img src={logo} className="App-logo" alt="photoMe" />
      <h3>Ivan Panin</h3>
      <p>Contact information:</p>
      <ul>
        <li>Phone: +47 967 46 971</li>
        <li>Email: jovanni.94.van@gmail.com</li>
        <li>
          <a href="https://linkedin.com/in/ivan-panin">LinkedIn Ivan Panin</a>
        </li>
        <li>
          <a href="https://github.com/IvanPanin675">GitHub</a>
        </li>
        <li>
          <a href="https://t.me/Ivan_Panin">Telegram</a>
        </li>
      </ul>
      <h4>About me</h4>
      <p>
        Technically proficient professional with experience in equipment repair,
        telecommunications, and web development, dedicated to making a
        significant contribution to the advancement of innovative projects and
        achievement of company goals.
      </p>
      <p>Language skills:</p>
      <ul>
        <li>
          <p>Norwegian language: level A1</p>
        </li>
        <li>
          <p>English language: level A2-B1</p>
        </li>
        <li>
          <p>Ukrainian and Russian: Free</p>
        </li>
      </ul>
      
    </main>
  );
};
