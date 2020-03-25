import '../styles/index.scss';

import "circular-std";
import * as d3 from 'd3';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import svgcontents from '!!raw-loader!../../assets/devcycle.svg';

const infowindow_selector = '#infowindow';

function updateInfoWindowText(title, content) {
    const infowindow = document.querySelector(infowindow_selector);
    infowindow.querySelector('#title').textContent = title;
    infowindow.querySelector('#content').textContent = content;
}

function activateInfoWindow(title, content) {
    const infowindow = document.querySelector(infowindow_selector);
    infowindow.classList.add("active");
    updateInfoWindowText(title, content);
}

function resetInfoWindow() {
    const infowindow = document.querySelector(infowindow_selector);
    infowindow.classList.remove("active");
    updateInfoWindowText("", "");
}

function updateText(title, content) {
    popup.querySelector('#text11100').textContent = title;
}

document.querySelector('#devcycle-container').innerHTML = svgcontents;

const svg = document.querySelector('#a88970c1-6b04-49ec-85a2-74579748921c');
let selectedPoly = null;

const steps = [
    { id: '#polygon22226', title: 'Problem Identification', content: 'Problem Identification Content'},
    { id: '#polygon22236', title: 'Research and Validation', content: 'Problem Identification Content'},
    { id: '#polygon22238', title: 'Product Requirements', content: 'Problem Identification Content'},
    { id: '#polygon22240', title: 'Concept Generation', content: 'Problem Identification Content'},
    { id: '#polygon22242', title: 'System Architecture', content: 'Problem Identification Content'},
    { id: '#polygon21738', title: 'Experience Prototype' },
    { id: '#polygon21736', title: 'Experience Testing' },
    { id: '#polygon21740', title: 'Storyboards' },
    { id: '#polygon21948', title: 'Integrated System Prototype' },
    { id: '#polygon21946', title: 'Subsystem Prototype(s)' },
    { id: '#polygon21950', title: 'Functional Testing' },
    { id: '#polygon22546', title: 'Engineering Prototype' },
    { id: '#polygon22634', title: 'Engineering Verification' },
    { id: '#polygon22498', title: 'Design Verification' },
    { id: '#polygon22500', title: 'Product Validation' },
    { id: '#polyline22504', title: 'Ship to Production' }
];

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at. Consequat interdum varius sit amet mattis vulputate. Fames ac turpis egestas maecenas. Feugiat nisl pretium fusce id velit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Eu feugiat pretium nibh ipsum consequat nisl. Nullam vehicula ipsum a arcu cursus. Ullamcorper malesuada proin libero nunc. Dolor magna eget est lorem ipsum dolor sit amet. Diam donec adipiscing tristique risus nec.";

const bg = document.querySelector('#background-grey');
const popup = document.querySelector(infowindow_selector);

for (const step of steps) {
    if(svg.querySelector(step.id) === null) {
        console.log(step.id);
    }
    svg.querySelector(step.id).classList.add('step');
    svg.querySelector(step.id).addEventListener('click', function(e) {
        if(selectedPoly !== null) {
            selectedPoly.classList.remove('active');
        }
        bg.classList.add('active');
        popup.classList.add('active');
        // selectedPoly = e.target;
        // selectedPoly.classList.add('active');
        // updateText(step.title, lorem);
        activateInfoWindow(step.title, lorem);
        e.stopPropagation();
    });
}

bg.addEventListener("click", function(e) {
    // selectedPoly.classList.remove('active');
    bg.classList.remove('active');
    popup.classList.remove('active');
    console.log(e);
    // resetInfoWindow();
});

// tippy('#polygon730', {
//     content: 'Problem Identification Content',
//     placement: 'right'
//   });