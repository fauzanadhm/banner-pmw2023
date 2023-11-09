"use client";

import { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [bravo, setBravo] = useState(0);
  const [nama, setNama] = useState("A. Fauzan Adhima");
  const [ageGuess, setAgeGuess] = useState("Guess my age!");

  function handlerTambahBravo() {
    setBravo(bravo + 1);
  }

  function handlerRevealIg() {
    setNama("@fauzanadh.ma");
  }

  function handlerAgeGuess(guess) {
    // const userGuess = guess;
    if (guess !== "") {
      if (guess === "21") {
        setAgeGuess(`Yes, my age is ${guess} 👍`);
      } else {
        setAgeGuess(`My age is not ${guess}`);
      }
    } else {
      setAgeGuess("Guess my age!");
    }
  }

  return (
    <div className="body">
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/fa_circle.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              {/* NIM dan BIO*/}
              <p>D121211030</p>
              <p>{ageGuess}</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <div
            className="cta-button"
            style={{
              marginTop: "12px",
            }}
            onClick={handlerRevealIg}
          >
            <p>IG Reveal</p>
          </div>
          <input
            style={{
              marginTop: "12px",
            }}
            placeholder="18"
            onChange={(e) => handlerAgeGuess(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}
