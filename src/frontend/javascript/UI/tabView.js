


class TabView extends View{
    constructor(name, domElem, extras){
        super(name, domElem, extras);
        this.currently_selected_tab = null; // dom element
        this.initTabs();
    }

    initTabs(){
        const tabs = document.getElementsByClassName('tab');
        this.currently_selected_tab = tabs[0];

        for(let t of tabs){
            t.addEventListener('click', e=>{
                this.currently_selected_tab.className = this.currently_selected_tab.className.replace(' active-tab', ' ');
                t.className += ' active-tab';
                this.currently_selected_tab = t;

                if(!this.data.length || this.data.length>0)this.domElement.innerHTML = this.data[this.currently_selected_tab.getAttribute('name')];
            });
        }
    }


    update(current_selected_struct){
        let path = `projects>${current_selected_struct['name']}`
        return this.viewModel.get(path)   
    }

    showView(current_sel){

        this.update(current_sel)
        .then(res=>{

            console.log(res.length)
            if(!res.length){
                this.data = res; // udate the data and show now.
                this.domElement.innerHTML = this.data[this.currently_selected_tab.getAttribute('name')];
            }
            if(res.length == 0)
                this.domElement.innerHTML = " "
            
            
        })
    }
}