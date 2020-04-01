export function getOffsetLeft(elem) {
    var offset = 0;
    do {
        if ( !isNaN( elem.offsetLeft ) )
        {
            offset += elem.offsetLeft;
        }
    } while( elem = elem.offsetParent );
    return offset;
}


export function getOffsetTop(elem) {
    var offset = 0;
    do {
        if ( !isNaN( elem.offsetTop ) )
        {
            offset += elem.offsetTop;
        }
    } while( elem = elem.offsetParent );
    return offset;
}