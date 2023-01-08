import { addNew } from './modules/dom';

import { submitListener  } from './modules/task';
listener();
submitListener();

function listener () {
    const addProject = document.querySelector('.addProject')

    addProject.addEventListener('click', function(e) {
        e.preventDefault();

        addNew();
})}

/*function personalListener() {
    const personalPr = document.querySelector('.personalPr');
    personalPr.addEventListener('click', function(e) {
    
    showPersonal;
    })
}*/

