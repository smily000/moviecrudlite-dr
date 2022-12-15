function animate(e){
    let elemtents = document.createElement('div');
    elements.setAttribute("class","element");
    document.body.appendChild(elements);
    elements.style.left = e.cliiedntX+'px';
    elements.style.top = e.clientY+'px';

    setTimeout(function(){
        elements.remove()
    },2000);
}

document.onmousemove = animateBg;






<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script> 