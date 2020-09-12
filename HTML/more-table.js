"use strict";

let Tsaurs = [
	{ name: "Tyrannosaurus Rex",
	height: 15,
	weight: 6,
	place: "North America",
	time: "Late Maastrichtian" },
	
	{ name: "Tyrannosaurus Rex",
	height: 15 " feet",
	weight: 6 " tonnes",
	place: "North America",
	time: "Late Maastrichtian" },
	
	{ name: "Tyrannosaurus Rex",
	height: 15 " feet",
	weight: 6 " tonnes",
	place: "North America",
	time: "Late Maastrichtian" },
	
	{ name: "Tyrannosaurus Rex",
	height: 15 " feet",
	weight: 6 " tonnes",
	place: "North America",
	time: "Late Maastrichtian" },
	
	{ name: "Tyrannosaurus Rex",
	height: 15 " feet",
	weight: 6 " tonnes",
	place: "North America",
	time: "Late Maastrichtian" }
];

function
generateTableHead(table, data) {
	let thead =
	table.createTHead();
	let row =
	thead.insertRow();
		for (let key of data) {
			let th =
		document.createElement("th");
			let text = 
		document.createTextNode(key);
		th.appendChild(text);
		row.appendChild(th);
		}
}


function generateTable(table,data) {
	for (let element of data) {
		let row =
	table.insertRow();
	For (key in element) {
		let cell =
	row.insertCell();
		let text =
	document.createTextNode(element [key]);
	
	cell.appendChild(text);
		}
	}
}

let table =
document.querySelector("table");
let data = 
Object.keys(Tsaurs[0]);
generateTable(table, Tsaurs);
generateTableHead(table,data);






