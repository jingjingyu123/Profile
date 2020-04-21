var b = document.getElementById('btt'),
os,currentPos, Height;

Height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
os = Height/4;
window.addEventListener("scroll", function(){
    if(document.body.scrollTop){
        currentPos = document.body.scrollTop;
    }else if(document.documentElement.scrollTop){
        currentPos = document.documentElement.scrollTop;
    }else{
        currentPos = 0;
    }

    if(currentPos > os){
        b.className = 'visible';
    }else{
        b.className = '';
    }
});
b.addEventListener("click", function(){
	event.preventDefault();
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
});	