import { addNew } from './modules/dom';
import { windowListener } from './modules/projects';
import { submitListener  } from './modules/task';
import { submitListenerPr } from './modules/projects';
listener();
submitListener();
submitListenerPr();
windowListener();

function listener () {
    const addProject = document.querySelector('.addProject')

    addProject.addEventListener('click', function(e) {
        addNew();
})}
