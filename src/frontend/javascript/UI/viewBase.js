class View {
    constructor(name, domElement, extras){
        this.domElement = null
        this.extras = null
        this.view_callBack = null
        this.name = null
        this.viewModel = global_viewModel
        this.data = {}
        this.childViews = []
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

    addChild(child){
        this.childViews.push(child);
    }

    update(){
        this.view_callBack()
        for(let v of this.childViews){
            v.update();
        }
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