let view = {

      bodyElement: document.querySelector('#Root'),

      getHeaderBar: function () {
            let headerBar = document.createElement('div');
            headerBar.id = 'HeaderBar';

            headerBar.innerHTML = `
                  <h1>Demostration App</h1>`;

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
                        <p>${element.caption}</p>
                        `
                  navBar.appendChild(navOption);
            });
            return navBar;
      },

      render: function () {
            let msn = document.createElement('h1');
            msn.innerHTML = `The Mechi App`;
            this.bodyElement.appendChild(this.getHeaderBar());
            this.bodyElement.appendChild(this.getNavBar(navOptions));
            this.bodyElement.appendChild(msn);
      }

};