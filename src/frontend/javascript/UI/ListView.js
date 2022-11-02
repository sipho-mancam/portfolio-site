

class ListView extends View{
    constructor(name, domElem, extras={index:0}, id=0){
        super(name, domElem, extras);
        console.log(this.name, this.domElement);
        /**
         * Data here will be the list data only
         */
        this.current_list = extras['index'];
        this.init();
        this.projectViewName = document.getElementById('projectName');
        this.group_name = document.getElementById('GroupName');
        this.group_img = document.getElementById("GroupImage")
        this.current_selected = null;
        this.TabSystem = new TabView('tab-view', document.getElementById('tab-content'), {});
        // console.log(this.data)
        
    }

    init(){
        this.load_data()
        .then(res=>{

            if(this.data){
                this.current_selected = this.data[0];
                this.domElement.innerHTML = this.showView();
                const list_items = document.getElementsByClassName('list-item');

                
                this.group_name.innerText = card_images[this.current_list]['name'].toUpperCase();
                this.group_img.setAttribute('src', card_images[this.current_list]['img_url']);

                try{
                    this.projectViewName.innerText = this.current_selected['title'];
                    this.TabSystem.showView(this.current_selected);
                }catch(err){
                    this.projectViewName.innerText = " "
                }
                

                // initialise the list items to be clickable.
                for(let item of list_items){
                    item.addEventListener('click', e=>{
                        // console.log(this.current_selected)
                        // send signal to the tab view and show data
                        this.projectViewName.innerText = item.getAttribute('name');
                        let index = parseInt(item.getAttribute('index'))
                        
                        this.current_selected  = this.data[index];
                        // console.log(this.current_selected)
                        this.TabSystem.showView(this.current_selected);
                    })

                }
            }
            
        });
    }
    
    updateList(index){
        this.current_list = index;
        this.init();
    }

    openView(dataPath){
        super.dataPath = dataPath;

    }

    async load_data(){
        // this will set the internal data here.
        await this.viewModel.get(`groups>index=${this.current_list}>project-list`)
        .then(res=>{
            // console.log(res)
            if(res)this.data = res;
        });

        // return super.load_data();
    }


    update(){

        this.load_data();

        this.readyView = this.showView();

        return super.update()
    }

    getView(){
        return this.readyView;
    }

    showView(){
        super.showView();

        const listData = this.data;
        let res = "";

        for(let li of listData){
            res+=
            `
            <div class="list-item" id="${li.id}" name="${li.title}" index=${listData.indexOf(li)}>
                <h5>${li.title}</h5>
            </div>
            `
        }

        return res;
    }


}