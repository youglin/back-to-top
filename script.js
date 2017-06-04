window.onload = function(){
	var obtn = document.getElementById('btn');
	var timer = null;
    var isTop = true;
	var clientHeight = document.documentElement.clientHeight;
    
     window.onscroll = function(){

         var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop>=clientHeight) {
            obtn.style.display = 'block';
        }else{
            obtn.style.display = 'none';
        }
         	if(!isTop){
        		clearInterval(timer);
        	}
        	isTop = false;
        }

	 obtn.onclick = function(){
		timer = setInterval(function(){
        
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = Math.floor(-osTop/6);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
         
         isTop = true;
        console.log(osTop-ispeed);
        if (osTop == 0) {
        	clearInterval(timer);
        }      
		},30);
	}
}