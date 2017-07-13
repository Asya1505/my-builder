/**
 * Created by Nik on 13.07.2017.
 */
    var card = document.querySelector(".card"),
        btn = document.querySelector(".avtorization");
    if(card != null) {
        btn.addEventListener("click", flipFn);
    }

    function flipFn(){
        var c = card.classList;

        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    }