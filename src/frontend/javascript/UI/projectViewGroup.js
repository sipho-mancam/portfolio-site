





class ProjectUIView extends View {
    /**
     * Initialize the tabs here
     * Initialize the list on the side
     * Initialize the footer
     */
    constructor(name, domElem=null, extras){
        super(name, domElem, extras);
        console.log(name);
        this.tabView = null; // initialse the tabs
        this.listView = null // initialise the list, 
        this.group_name = null;
        this.group_img_url = null;
        this.group_data_path = null;
        this.index = 0;
    }

    open(name, img_url, path=""){
        this.group_name = name;
        this.group_img_url = img_url;
        this.group_data_path = path;
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
                <div class="body list-container" id="list-cont">
                   
                </div>
                <div class="footer"></div>
            </div>
            <div class="p-right-display col-9">
                <div class="header">
                    <h2 id="projectName">Soduku Puzzle Solver</h2>
                </div>
                <div class="body">
                    <div class="tab-header">
                        <div class="tab active-tab" name="preview">
                            <h5>Preview</h5>
                        </div>
                        <div class="tab" name="description">
                            <h5>Description</h5>
                        </div>
                        <div class="tab" name="code">
                            <h5>Code</h5>
                        </div>
                        <div class="spanning"></div>
                    </div>

                    <div class="tab-body" id="tab-content">

                    </div>

                </div>
                <div class="footer">
                    <div class="f-nav-controls-container row">
                        <div class="col-3 f-nav-control previous-control" id="previous-group">
                            <h1><i class="bi bi-skip-start-fill"></i></h1>
                        </div>
                        <div class="col-3 span">
                            <!-- <h1><i class="bi bi-skip-start-fill"></i></h1> -->
                        </div>
                        <div class="col-3 f-nav-control next-control" id="next-group">
                            <h1><i class="bi bi-skip-end-fill"></i></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    init(){
        if(this.group_name != null){
            // this.tabView = new TabView(this.group_name,this.group_data_path)
            this.listView = new ListView(this.group_name, document.getElementById("list-cont"),{index:0});
            // this.listView.updateList(1);
            console.log("I initialize the view");
            const next = document.getElementById("next-group");
            const prev = document.getElementById("previous-group");

            next.addEventListener('click', e=>{
                this.index ++;
                if(this.index > 8) this.index = 0;
                this.listView.updateList(this.index);
            });

            prev.addEventListener('click', e=>{
                this.index --;
                if(this.index  < 0)this.index = 8;
                this.listView.updateList(this.index);
            })
        }
    }

    

    registerChild(childName){

    }


}  

const projectUIView = new ProjectUIView('project-ui', null, null);

class ProjectViewGroup extends ViewGroup{
    constructor(name, views){
        super(name, views);
        this.name = name;
        this.views = views
        this.projectUIView = new ProjectUIView('project-ui', null, null);
        this.projectOverlay = new OverlayContainer('project-overlay', null, null);
    }

    init(){
     
        super.init();
    }

    open(name, img_url){
        this.projectOverlay.draw(()=>{
            return this.projectUIView.open(name, img_url);
        }, null);
        this.projectUIView.init();
    }

    registerView(view, callback, args){
        super.registerView(view, callback, args);
    }
}

// const projectViewGroup = new ProjectViewGroup('project-view-group');