import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.piePagina} s12 m12 l12`}>
      <nav class="light-blue darken-3">
        <div class="nav-wrapper">
          <div class="footer-copyright">
            <div class="container">
              <a
                class="grey-text text-lighten-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://newsapi.org/"
              >
                Powered by News API
              </a>
              <div class="right">
                2020 -
                <a
                  class="grey-text text-lighten-4 right"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/nicolasariza/"
                >
                  &nbsp;Nicolas Ariza
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
