import React from "react";
import { HashLink } from "react-router-hash-link";

import { Wrapper } from "./RecipeApp.styles";

export const RecipeApp = () => {
  return (
    <>
      <Wrapper>
        <HashLink className="return-to-main" to="/">
          Back to the main site
        </HashLink>

        <div class="container">
          <header class="header">
            {/* <img src="img/logo.png" alt="Logo" class="header__logo" /> */}
            <form class="search">
              <input
                type="text"
                class="search__field"
                placeholder="Search over 1,000,000 recipes..."
              />
              <button class="btn search__btn">
                <svg class="search__icon">
                  <use href="img/icons.svg#icon-magnifying-glass"></use>
                </svg>
                <span>Search</span>
              </button>
            </form>
            <div class="likes">
              <div class="likes__field">
                <svg class="likes__icon">
                  <use href="img/icons.svg#icon-heart"></use>
                </svg>
              </div>
              <div class="likes__panel">
                <ul class="likes__list"></ul>
              </div>
            </div>
          </header>

          <div class="results">
            <ul class="results__list"></ul>

            <div class="results__pages"></div>
          </div>

          <div class="recipe"></div>

          <div class="shopping">
            <h2 class="heading-2">My Shopping List</h2>

            <ul class="shopping__list"></ul>

            <div class="copyright">
              &copy; by Jonas Schmedtmann. Powered by
              <a href="http://food2fork.com" target="_blank" class="link">
                Food2Fork.com
              </a>
              .
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
