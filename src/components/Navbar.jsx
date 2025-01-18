import React from "react"
import { SearchBar } from "./SearchBar"
import logo from "../assets/blues-sky-weather-app-high-resolution-logo-transparent.png"
export const Navbar = (props) => {
  const {changeLocation} = props
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo" src='https://api.logo.com/api/v2/images?design=lg_IRph8Buq1TjbWDbse4&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=b860f5e4304f09262b2f5d87b2f02b559f9b065e4d33de3a38396b985b7568e7' alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#popular-locations">Popular Locations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#artist-of-the-month">Artist of the Month</a>
              </li>
              
            </ul>
            {<SearchBar changeLocation={changeLocation} />}
          </div>
        </div>
  </nav>
    </>
  )
}