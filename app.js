function search(event) {	
	const searchbar = document.getElementById("jettison-app-searchbar");
	if (document.activeElement != searchbar) return;
	
	location.replace("https://www.google.com/search?q=" + searchbar.value.split(" ").join("+") + "+-ai");
	
}

const addCustomStyle = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

addCustomStyle(`

@import url('https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100..900;1,100..900&display=swap');

body {
	padding-top: 48px !Important;
}

#jettison-app-wrapper {
	width: 100%;
	padding: 7px 4px;
	background: #d2e3f4;
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}

#jettison-app-header {
	font-family: "Tourney", sans-serif;
	display: inline;
	color: dodgerblue;
	font-size: 1.3rem;
	font-weight: 500;
	letter-spacing: 1px;
	min-width: 190px;
}

#jettison-app-searchbar {
	font-family: "Roboto", sans-serif;
 	width: 57%;
	overflow: auto;
	border-radius: 7px;
	border: none;
	padding: 9px 10px;
	box-shadow: 0 0 5px #888;
}

#jettison-app-button {
	background: orange;
	border-radius: 7px;
	padding: 9px 7px;
	border: none;
	color: white;
	font-family: "Roboto", sans-serif;
	font-weight: 500;
}

`);

const customElement = document.createElement("section");
customElement.id = "jettison-app-wrapper";
customElement.innerHTML = `

<h1 id="jettison-app-header">Jettison Search</h1><input id="jettison-app-searchbar" type="text" placeholder="Search Without AI..."/><button id="jettison-app-button">Search</button>

`;

document.body.append(customElement);

document.getElementById("jettison-app-button").onclick = search;

document.addEventListener("keydown", event => {
	if (event.key == "/") {
		event.preventDefault();
		document.getElementById("jettison-app-searchbar").focus();
	}

	else if (event.key == "Enter") {		
		search();
		return;
	}
	
});

