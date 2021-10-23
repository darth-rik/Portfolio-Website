import React, { useEffect } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="social">
          <li className="social__links">
            <a href="https://github.com/darth-rik">
              <FaGithub />
            </a>
          </li>
          {/* <li className='social__links'>
						<a href='https://www.linkedin.com/in/debanjit-sengupta/'>
							<FaLinkedin />
						</a>
					</li> */}
        </ul>

        {/* <p className='paragraph--small'>
					Loading screen animation by{" "}
					<a
						style={{ textDecoration: "underline" }}
						href='https://dribbble.com/adrienbourmault'
						target='_blank'
						rel='noreferrer'
					>
						Adrien Bourmault
					</a>
				</p> */}

        <p className="paragraph--small">
          &copy; {new Date().getFullYear()} Debanjit Sengupta
        </p>
      </div>
    </footer>
  );
};

export default Footer;
