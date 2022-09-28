
/**
 * You Draw callback to display contents in the overlay will recieve a single input everytime (extras)
 * 
 */


class OverlayContainer{
    constructor(name,  drawCb, extras, init=0){
        this.name = name;
        this.drawCallBack = drawCb
        this.extras = extras;
        this.close_b = '<h1 class="close-overlay" style="font-size:4em;" id="close-ol"><i class="bi bi-x"></i></h1>'
        // this.domElement = document.getElementById('overlay-content-container') 
        this.content_container = document.getElementById('overlay-container');
        this.initCb = init
        this.views = [];
    }

    open(data=0){
        console.log('debug')
        try{
            if(data==0)this.domElement.innerHTML = this.drawCallBack(this.extras);
            else this.domElement.innerHTML = this.drawCallBack(data);

        }catch(err){

        }
        this.content_container.innerHTML += this.close_b;

        this.content_container.style.display = 'flex';
        this.close()
        if(this.initCb != 0)this.initCb()
    }   

    close(b=false){
        if(!b){ // initialise the close button
            let b = document.getElementById('close-ol');
            // console.log(this.content_container.children)
            b.addEventListener('click', (e)=>{
                b.remove()
                this.content_container.style.display = 'none';
            })
        }else{
            this.content_container.style.display = 'none'; // close instantly
        }
        
    }

    draw(draw_cb, args=[], init=0){
        this.content_container.style.display = 'block';
        if(typeof(args) != 'Object')args = [args];

        if(args.length == 0){ // assume draw_cb doesn't expect arguments.
            this.content_container.innerHTML = draw_cb();
            // this.domElement.innerHTML += this.close_b;
        }else{
            this.content_container.innerHTML = draw_cb(args);
            // this.domElement.innerHTML += this.close_b;
        }

        this.content_container.innerHTML += this.close_b;
        if(init != 0)init();
        this.close();
    }
}

// const projectOverlay = new OverlayContainer('project-overlay', ()=>{}, )