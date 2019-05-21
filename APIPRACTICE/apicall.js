var rootDiv = document.getElementById("root");
var container = document.createElement("div");

var theLogo = document.createElement("img");
theLogo.src = "Wenonah Littlebird.jpg";

rootDiv.appendChild(container);
container.appendChild(theLogo);

var request = new XMLHttpRequest();
request.open("Get", "https://jsonplaceholder.typicode.com/users",true);
        request.onload = function () {
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                data.forEach(users => {  
                        var card = document.createElement("div");
                        var header1 = document.createElement("h1");
                        header1.textContent = users.name;
                        card.classList.add("w3-blue");

                        var header2 = document.createElement("h2");
                        header2.textContent = users.username;

                        var header3 = document.createElement("h3");
                        header3.textContent = users.email;

                        var header4 = document.createElement("h4");
                        header4.textContent = users.address.street;

                        var header5 = document.createElement("h5");
                        header5.textContent = users.address.suite;

                        var header6 = document.createElement("h5");
                        header6.textContent = users.address.city;

                        var header7 = document.createElement("h5");
                        header7.textContent = users.address.zipcode;

                        var header8 = document.createElement("h6");
                        header8.textContent = users.address.geo.lat;

                        var header9 = document.createElement("h6");
                        header9.textContent = users.address.geo.lng;

                        container.appendChild(card);
                        card.appendChild(header1); 
                        card.appendChild(header2);
                        card.appendChild(header3);
                        card.appendChild(header4);
                        card.appendChild(header5);
                        card.appendChild(header6);
                        card.appendChild(header7);
                        card.appendChild(header8);
                        card.appendChild(header9);

                 
                        });
                } else {
                    alert("error");
            
                }
            }
            request.send();