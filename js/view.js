let view = {

      bodyElement: document.querySelector('#Root'),

      getHeaderBar: function () {
            let headerBar = document.createElement('div');
            headerBar.id = 'HeaderBar';

            headerOptions.forEach(element => {
                  let headerOption = document.createElement('div');
                  headerOption.className = 'barOption';
                  headerOption.innerHTML = `
                        <img class="headerIcon" src="${element.icon}">
                        <h1>${element.caption}</h1>
                  `;
                  headerBar.appendChild(headerOption);
            });

            return headerBar;
      },


      getNavBar: function (navOptions) {
            let navBar = document.createElement('div');
            navBar.id = 'NavBar';
            navOptions.forEach(element => {
                  let navOption = document.createElement('div');
                  navOption.className = "navOption";
                  navOption.innerHTML = `
                        <img class="navIcon" src="${element.icon}">
                        <p class="navCaption" >${element.caption}</p>
                        `
                  navBar.appendChild(navOption);
            });
            return navBar;
      },

      /*--- Card Component ---*/


      getCardComponent: function (cardImage) {
            let card = document.createElement('div');
            card.className = "card";

            card.innerHTML = `
                  <img src=${cardImage}>
            `;
            return card;
      },

      /*cards that have an horizontal scrolling*/

      getHorizontalCardsArrayComponent: function () {
            let cardArray = document.createElement('div');
            cardArray.className = "horizontalScrolling";
            for (let index = 0; index < 5; index++) {
                  let card = this.getCardComponent(cardsArray[0].cardImage);
                  cardArray.appendChild(card);
            }
            return cardArray;
      },

      /*cards that have an vertical scrolling*/

      getVerticalCardsArrayComponent: function () {
            let cardArray = document.createElement('div');
            cardArray.className = "verticalScrolling";
            for (let index = 0; index < 5; index++) {
                  let card = this.getCardComponent(cardsArray[0].cardImage);
                  cardArray.appendChild(card);
            }
            return cardArray;
      },

      /*--------------------*/

      getContent: function () {
            let mainContent = document.createElement('div');
            mainContent.id = "MainContent";
            mainContent.appendChild(this.getHorizontalCardsArrayComponent());
            mainContent.appendChild(this.getVerticalCardsArrayComponent());

            return mainContent;
      },

      render: function () {
            let msn = document.createElement('h1');
            this.bodyElement.appendChild(this.getHeaderBar());
            this.bodyElement.appendChild(this.getContent());
            this.bodyElement.appendChild(this.getNavBar(navOptions));
            this.bodyElement.appendChild(msn);
      }

};