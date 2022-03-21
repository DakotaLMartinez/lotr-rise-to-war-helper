import "./styles.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StyledNavLink from "./components/shared/StyledNavLink";
import Commanders from "./components/commanders";
import Troops from "./components/troops";
import Events from "./components/events";
import Experience from "./components/experience";
import Buildings from "./components/buildings";
import Land from "./components/land";

export default function App() {
  return (
    <div className="App">
      <div class="app-wrap">
        <img
          class="app-bg"
          src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1647047800/the-lord-of-the-rings-middle-earth-map-i109833_srhzzo.jpg"
          alt=""
        />
        <div class="app-content min-h-screen">
          <header>
            <img
              src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1647040687/lord-of-the-rings-rise-to-war_snyylh.jpg"
              alt="Lord of the Rings: Rise to War"
              className="h-44 sm:h-64 md:h-72 lg:h-96 max-w-7xl mx-auto"
            />
          </header>
          <h1 className="text-2xl text-center my-4">Game Data</h1>
          <section className="mt-6 px-8 max-w-7xl mx-auto grid sm:grid-cols-6">
            <aside className="flex flex-col text-left">
              <StyledNavLink to="/commanders">Commanders</StyledNavLink>
              <StyledNavLink to="/troops">Troops</StyledNavLink>
              <StyledNavLink to="/events">Events</StyledNavLink>
              <StyledNavLink to="/land">Land</StyledNavLink>
              <StyledNavLink to="/buildings">Buildings</StyledNavLink>
            </aside>
            <article className="mt-6 sm:col-span-5">
              <Routes>
                <Route path="commanders" element={<Commanders />} />
                <Route path="troops" element={<Troops />} />
                <Route path="events" element={<Events />} />
                <Route path="land" element={<Land />} />
                <Route path="buildings" element={<Buildings />} />
              </Routes>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
