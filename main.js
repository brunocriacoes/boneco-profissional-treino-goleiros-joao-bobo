"use strict"

Array.from( Object.values( document.querySelectorAll('.js-set-banner') ) )
.forEach( $img => {
    let call_back = function() {
        document.querySelector(`.js-place-image-l`).src = this.src
        document.querySelector(`.js-place-image-r`).src = this.src
        document.querySelector(`.js-place-image-m`).src = this.src
        console.log( this.src )
    }
    $img.addEventListener('click', call_back )
    $img.addEventListener('mouseover', call_back )
} )
