



class ProjectCardsView extends View{
    constructor(name='project-cards', domElem=null, extras=null){
        super(name, domElem, extras);
        this.name = name;
        this.domElement = domElem ? domElem: document.getElementsByClassName('project-item');
        this.extras = extras;
        this.init();
        this.projectViewGroup = new ProjectViewGroup('project-view-group');
    }

    init(){
        for(let c of this.domElement){
            c.addEventListener('click', (e)=>{
                // console.log(e.currentTarget.children)
                let img_url = e.currentTarget.children[0].getAttribute('src');
                let name = e.currentTarget.getAttribute('name');
                let ind  = parseInt(c.getAttribute('index'));
                this.projectViewGroup.open(name.toUpperCase(), img_url, ind);
            });
        }
    }
}

const projectCardsView = new ProjectCardsView('project-cards-view', null, null);