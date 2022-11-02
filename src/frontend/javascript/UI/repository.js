
const card_images = [
    {img_url:"./resources/python-img-2.png",name:"python"},
    {img_url:"./resources/js-icon.png", name:"JS"},
    {img_url:"./resources/java-icon.png", name:"JAVA"},
    {img_url:"./resources/c-icon.png", name:"C"},
    {img_url:"./resources/cpp-icon.png", name:"C++"},
    {img_url:"./resources/bash-icon.png", name:"Bash"},
    {img_url:"./resources/html-icon.png", name:"HTML"},
    {img_url:"./resources/visualization-icon.png", name:"Visualisation"},
    {img_url:"./resources/ai-icon.png", name:"AI"},
];


const testData = {

         groups:[
                 {
                    name: "python",
                    id:12345,

                    "project-list":[
                        {
                            name:"Soduku Solver",
                            id:"123asdad123asda(some hash)",
                            title: "Pacman",
                            path:"projects>name>$selected-tab"  
                        },
                        {
                            name:"Soduku Solver 2",
                            id:"123asdad123asda(some hash)",
                            title: "Race cars",
                            path:"projects>name>$selected-tab"  
                        },
                        {
                            name:"Soduku Solver 3",
                            id:"123asdad123asda(some hash)",
                            title: "Something else",
                            path:"projects>name>$selected-tab"  
                        },
                    ]
        
                },
                {
                    name: "python",
                    id:12345,
                    "project-list":[
                        {
                            name:"Soduku Solver",
                            id:"123asdad123asda(some hash)",
                            title: "Soduku Solver",
                            path:"projects>name>$selected-tab"  
                        },
                    ]
        
                },
                {
                    name: "python",
                    id:12345,
                    "project-list":[
                        {
                            name:"Soduku Solver",
                            id:"123asdad123asda(some hash)",
                            title: "Soduku Solver",
                            path:"projects>name>$selected-tab"  
                        },
                    ]
        
                }
            
    
         ],
    
         projects:
         {
             
            "Soduku Solver":{
                    preview: "Preview to be shown here",
                    description:"description to be shown here",
                    code:"Code to be shown here",
                    group:"string(name)Python",
                    id:"efdadca2312312d (some hash)"
                },
            "Soduku Solver 2":{
                preview: "Preview to be shown here 232",
                description:"description to be shown here 2",
                code:"Code to be shown here 2",
                group:"string(name)Python",
                id:"efdadca2312312d (some hash)"
            }
         }
    }




class Repository{

    constructor(sourceList=[]){
        this.sourceLis = sourceList;
        this.data_structure = testData;
        this.state = 0x11;
        this.read = 0;
        // this.init()

        
    }


    update(method, url, data){
        this.state = 0x00; // reading state
        return make_request(method, url, data)
    }

    traverseDataStructure(path){
        let cur = this.data_structure
        let paths = path.split('>')
        console.log(paths)
        if(paths.length == 0) return cur[path]

        for(let p of paths){
            if(p.match("index")){ // it's an array
                let index = parseInt(p.split('=')[1]);
                p = index;

                console.log(index)
               
            }
            cur = cur[p]
        }
        return cur
    }

    updateContent(method, url, data={}){
       // make request to fetch specific data here
       this.update(method, url, data)
       .then(res=>{

       })
    }

    isReady(){return this.state==0x11}

    get(key){

        if(this.isReady()){
            return this.traverseDataStructure(key)
        }else{
            return {'error':'Still loading...'}
        }
    }
}