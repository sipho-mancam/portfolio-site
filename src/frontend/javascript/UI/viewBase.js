class View {
    constructor(name, domElement, extras){
        this.domElement = domElement
        this.extras = extras
        this.view_callBack = null
        this.name = name
        this.viewModel = global_viewModel
        this.data = {}
        this.childViews = []
        this.dataPath = "";
        this.readyView = null; // the string that will container the current view ... set at every "showView" call.
    }

    init(cb, args=null){
        if(cb){
            if(args)cb(args);
            else cb();
            return;
        }
        throw new Error('Please pass the initialisation callback');
    }

    load_data(){

    }

    showView(){

    }

    addChild(child){
        this.childViews.push(child);
    }

    update(){
        this.view_callBack()
        for(let v of this.childViews){
            v.update();
        }
    }

    getDependencyPath(){

    }

    addDependency(name, path){
        //path = groups>$index=1>project-list
        // $ -> this symbol tells our system that this part of the path is dependent on the current state, "index" tells us that its an array.
        // the path must be parsed to a repo ready path
        // repo ready path: groups>index=1>project-list

        const depObj = {}

        depObj["name"] =  name;
        depObj["path"] = this.parsePath(path);
    }

    parsePath(path=""){
        let p = path.split('>');

        let parsed = p.map((s, index)=>{
            if(s.startsWith("$")){ // it is a variable part of the path
                if(s.includes("index")){
                    return "index="+this.index;
                } // it's an array, give the index

                return this.name;
                

            }
        });
    }

}


class ViewGroup{
    constructor(name, views=[]){
        this.name = name;
        this.views = views;
    }

    init(){
        for(let v of this.views){
            v['view'].init(v['callback'], v['args']);
        }
    }

    registerView(view, callback, args){
        this.views.push({'view':view, 'callback':callback, 'args':args});
    }
}