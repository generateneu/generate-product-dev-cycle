import '../styles/index.scss';

console.log('webpack starterkit');

import * as d3 from 'd3';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function updateInfoWindowText(title, content) {
    const infowindow = document.querySelector('#infowindow');
    infowindow.querySelector('#title').textContent = title;
    infowindow.querySelector('#content').textContent = content;
}

function activateInfoWindow(title, content) {
    const infowindow = document.querySelector('#infowindow');
    infowindow.classList.add("active");
    updateInfoWindowText(title, content);
}

function resetInfoWindow() {
    const infowindow = document.querySelector('#infowindow');
    infowindow.classList.remove("active");
    updateInfoWindowText("", "");
}

const svg = document.querySelector('#svg1501');
let selectedPoly = null;

const steps = [
    { id: '#polygon730', title: 'Problem Identification', content: 'Problem Identification Content'},
    { id: '#polygon740', title: 'Research and Validation', content: 'Problem Identification Content'},
    { id: '#polygon742', title: 'Product Requirements', content: 'Problem Identification Content'},
    { id: '#polygon744', title: 'Concept Generation', content: 'Problem Identification Content'},
    { id: '#polygon746', title: 'System Architecture', content: 'Problem Identification Content'},
];

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at. Consequat interdum varius sit amet mattis vulputate. Fames ac turpis egestas maecenas. Feugiat nisl pretium fusce id velit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu feugiat pretium nibh ipsum consequat nisl. Nullam vehicula ipsum a arcu cursus. Ullamcorper malesuada proin libero nunc. Dolor magna eget est lorem ipsum dolor sit amet. Diam donec adipiscing tristique risus nec.";

for (const step of steps) {
    svg.querySelector(step.id).addEventListener('click', function(e) {
        if(selectedPoly !== null) {
            selectedPoly.classList.remove('active');
        }
        selectedPoly = e.target;
        selectedPoly.classList.add('active');
        activateInfoWindow(step.title, lorem);
        e.stopPropagation();
    });
}

svg.addEventListener("click", function(e) {
    selectedPoly.classList.remove('active');
    console.log(e);
    resetInfoWindow();
});

// tippy('#polygon730', {
//     content: 'Problem Identification Content',
//     placement: 'right'
//   });