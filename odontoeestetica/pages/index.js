import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>Clínica de Odonto e Estética</h1>
          </div>
          <button className="iconmenuresponsivo">
            <i className="bi bi-list"></i>
          </button>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Profissionais</a>
              </li>
              <li>
                <a href="#">Curso</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="botaocomecar">
            <button>cadastre-se!</button>
          </div>
        </nav>
      </header>

      <div id="slide" className="slider-content">
        <input type="radio" name="btn-radio" id="radio1" />
        <input type="radio" name="btn-radio" id="radio2" />
        <input type="radio" name="btn-radio" id="radio3" />

        <div className="slide-box primeiro">
          <img
            width="80%"
            height="80%"
            style={{ objectFit: "cover" }}
            src="/imgs/pexels-cottonbro-studio-6502039.jpg"
            alt=""
          />
        </div>
        <div className="slide-box">
          <img
            width="80%"
            height="80%"
            style={{ objectFit: "cover" }}
            src="/imgs/pexelscadeiraodontologia.jpg"
            alt=""
          />
        </div>
        <div className="slide-box">
          <img
            width="80%"
            height="80%"
            style={{ objectFit: "cover" }}
            src="/imgs/clinicaestetica.jpg"
            alt=""
          />
        </div>

        <div className="nav-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
        </div>
        <div className="nav-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
      </div>

      <section>
        <h2>Especialidades</h2>
        <p>Varios tipos de especialidades</p>
        <div className="servicos">
          <div className="card">
            <img src="/imgs/dentista.png" alt="technology" />

            <div className="cardtext">
              <h3>Serviços dentarios em geral</h3>
            </div>
            <div className="oculttext">
              <p>servicos dentarios em geral</p>
            </div>
          </div>
          <div className="card">
            <img src="/imgs/implante-dentario.png" alt="technology" />

            <div className="cardtext">
              <h3>Implantes dentarios</h3>
            </div>
            <div className="oculttext">
              <p>Metodo moderno de implante dentario</p>
            </div>
          </div>
          <div className="card">
            <img src="/imgs/dente.png" alt="technology" />

            <div className="cardtext">
              <h3>Clareamento dentario</h3>
            </div>
            <div className="oculttext">
              <p>Seus dentes com limpeza e clareamento dentario</p>
            </div>
          </div>
          <div className="card">
            <img src="/imgs/orcamentoodontologico.png" alt="coding" />
            <div className="cardtext">
              <h3>Orçamento detalhado de saude dental</h3>
            </div>
            <div className="oculttext">
              <p>orçamento detalhado de seus dentes</p>
            </div>
          </div>
          <div className="card">
            <img src="/imgs/estetico.png" alt="technology" />

            <div className="cardtext">
              <h3>Odontologia estetica</h3>
            </div>
            <div className="oculttext">
              <p>serviços esteticos incriveis</p>
            </div>
          </div>
          <div className="card">
            <img src="/imgs/belezaestetica.png" alt="desenvolvimento de jogo" />
            <div className="cardtext">
              <h3>Analise detalhada de seu veiculo</h3>
            </div>
            <div className="oculttext">
              <h3>
                Com nossos detectores e maquinarios novos de encontramos os
                problemas ePZ de seu veiculo
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sobre">
          <div className="sobreconteudo">
            <h2>Sobre</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              nisi molestias magnam, ex eveniet explicabo magni incidunt ullam
              aliquam enim eos expedita ipsam eius et consectetur, laboriosam
              animi reiciendis culpa!
            </p>
          </div>
          <div className="sobreimg">
            <img src="/imgs/imgdentistadesenho.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <h2>Equipe</h2>
        <div className="equipe">
          <div className="infofuncionario">
            <img src="/imgs/iabotfisico.jpg" alt="" />
            <p>BLADE CEO</p>
          </div>
          <div className="infofuncionario">
            <img src="/imgs/clinicaestetica.jpg" alt="" />
            <p>PARDAL ANESTESISTA</p>
          </div>
          <div className="infofuncionario">
            <img src="/imgs/clinicaestetica.jpg" alt="" />
            <p>asdasda</p>
          </div>
        </div>
      </section>

      <footer id="contato">
        <div className="ctt">
          <h4>Contato:</h4>
          <p>telefone:(61) 90000-0000</p>
          <p>email: clinicaodonto@gmail.com</p>
        </div>
        <div className="redessociais">
          <h4>Redes Sociais</h4>
          <ul>
            <a
              href="https://www.linkedin.com/in/roberto-eduardo-a50817247"
              target="_blank"
            >
              <li style={{ "--cor1": "#1900ff", "--cor2": "black" }}>
                <span className="icon">
                  <i className="bi bi-linkedin"></i>
                </span>
                <span className="text">Linkedin</span>
              </li>
            </a>
            <a href="https://www.google.com.br/" target="_blank">
              <li style={{ "--cor1": "#1900ff", "--cor2": "#ff0404" }}>
                <span className="icon">
                  <i className="bi bi-instagram"></i>
                </span>
                <span className="text">instagram</span>
              </li>
            </a>
            <a href="#">
              <li
                style={{ "--cor1": "rgb(124, 255, 37)", "--cor2": "darkgreen" }}
              >
                <span className="icon">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="text">Whats-App</span>
              </li>
            </a>
            <a href="#">
              <li style={{ "--cor1": "#958bec", "--cor2": "#080683" }}>
                <span className="icon">
                  <i className="bi bi-facebook"></i>
                </span>
                <span className="text">Facebook</span>
              </li>
            </a>
            <a href="#">
              <li style={{ "--cor1": "#2d2c3a", "--cor2": "#000000" }}>
                <span className="icon">
                  <i className="bi bi-tiktok"></i>
                </span>
                <span className="text">TIKTOK</span>
              </li>
            </a>
          </ul>
        </div>

        <div className="funcionamento">
          <h4>Horarios de funcionamento:</h4>
          <p>segunda a sexta: 11:00 ás 22:00</p>
          <p>sabados e domingos: 11:00 ás 20:00</p>
        </div>
      </footer>
      <script src="/slide.js"></script>
    </>
  );
}
