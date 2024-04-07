import logo from "../photo.jpg";

export const AboutMe = () => {
  return (
    <main className="MainAboutMe">
      <img src={logo} className="App-logo" alt="photoMe" />
      <h1>Ivan Panin</h1>
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
      <h4>LANGUAGES</h4>
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
      <h4>EDUCATION</h4>
      <ul>
        <li>
          <p>IT School GoIT</p>
          <p>2022-2023</p>
          <p>Fullstack Developer</p>
        </li>
        <li>
          <p>State University of Information and Communication Technologies</p>
          <p>2014-2019</p>
          <p>Telecommunications Engineer</p>
        </li>
        <li>
          <p>Diploma of Junior Specialist</p>
          <p>2010-2014</p>
          <p>Technician-programmer</p>
        </li>
      </ul>
      <h4>WORK EXPERIENCE</h4>
      <p>National Guard of Ukraine 2015-2023</p>
      <ul>
        <li>
          <p>Telecommunications engineer 2020-2023</p>
          <p>Duties</p>
          <p>
            Setting up and connecting IP phones, laying cables, replacing and
            repairing cables (welding optical cables), setting up switches,
            deploying an ip-server based on SentOS 7, network support
          </p>
        </li>
        <li>
          <p>Office equipment maintenance technician 2017-2020</p>
          <p>Duties</p>
          <p>
            PC: diagnostics, repair (soldering), replacement of components,
            installation of operating systems, programs and settings.
          </p>
          <p>
            Peripheral devices: diagnostics, repair (soldering), replacement of
            components, settings for the network
          </p>
        </li>
        <li>
          <p>Clerk in the fire service 2016-2017</p>
          <p>Duties</p>
          <p>
            Collection of data on the availability of fire extinguishing
            equipment (from fire extinguishers to fire engines) and the
            timeliness of their maintenance. Analyze needs for the next year. (I
            have good skills in using Microsoft Excel, Word) Testing new fire
            extinguishers from suppliers and providing description and
            specifications to management.
          </p>
        </li>
        <li>
          <p>A chemist driver 2015-2016</p>
          <p>Duties</p>
          <p>
            In this position, he was engaged in clerical work and map
            development using Corel Draw.
          </p>
        </li>
      </ul>
    </main>
  );
};
