

class ProjectUIView extends View {

    constructor(name, domElem=null, extras){
        super(name, domElem, extras);

    }

    open(name, img_url){
        return `
        <br /><br />
        <div class="projects-ui row">
            <div class="p-left-nav col-3">
                <div class="header">
                    <div >
                        <h2 id="GroupName">${name}</h2>
                        <img id="GroupImage" class="img-responsive" width="30px" height="30px" src="${img_url}" />
                    </div>
                </div>
                <div class="body list-container">
                    <div class="list-item">
                        <h5>Soduku puzzle solver</h5>
                    </div>
                
                </div>
                <div class="footer"></div>
            </div>
            <div class="p-right-display col-9">
                <div class="header">
                    <h2 id="ProjectName">Soduku Puzzle Solver</h2>
                </div>
                <div class="body">
                    <div class="tab-header">
                        <div class="tab active-tab">
                            <h5>Preview</h5>
                        </div>
                        <div class="tab">
                            <h5>Description</h5>
                        </div>
                        <div class="tab">
                            <h5>Code</h5>
                        </div>
                        <div class="spanning"></div>
                    </div>

                    <div class="tab-body" id="tab-content">

                    </div>

                </div>
                <div class="footer">
                    <div class="f-nav-controls-container row">
                        <div class="col-3 f-nav-control previous-control">
                            <h1><i class="bi bi-skip-start-fill"></i></h1>
                        </div>
                        <div class="col-3 span">
                            <!-- <h1><i class="bi bi-skip-start-fill"></i></h1> -->
                        </div>
                        <div class="col-3 f-nav-control next-control">
                            <h1><i class="bi bi-skip-end-fill"></i></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }


}  


const projectUIView = new ProjectUIView('project-ui', null, null);




class ProjectViewGroup extends ViewGroup{
    constructor(name, views){
        super(name, views);
        this.name = name;
        this.views = views
        this.projectUIView = projectUIView;
        this.projectOverlay = new OverlayContainer('project-overlay', null, null);
    }

    init(){
     
        super.init();
    }

    open(name, img_url){
        this.projectOverlay.draw(()=>{
            return this.projectUIView.open(name, img_url);
        }, null)
    }

    registerView(view, callback, args){
        super.registerView(view, callback, args);
    }
}

// const projectViewGroup = new ProjectViewGroup('project-view-group');