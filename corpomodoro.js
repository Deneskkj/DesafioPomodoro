
        let  r = Math.floor(Math.random()*255),
        g = Math.floor(Math.random()*255),
        b = Math.floor(Math.random()*255),

        color = 'black';

    if(r*0.2126+g*0.7152+b*0.722 > 127 ){
       color = 'black';
    }

   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
   