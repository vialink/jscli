// print string to the output
function print(str) {
    document.getElementById('output').innerHTML+= str + '\n'
}
// clear the output
function clear() {
    document.getElementById('output').innerHTML = ''
}
// this will init jscli
function init() {
    function focusInput() {
        document.getElementById('input').focus()
    }
    // when clicking output focus should go to the input
    document.getElementById('output').addEventListener('focus', focusInput, false)
    document.getElementById('wrap').addEventListener('click', focusInput, false)

    // we should capture tab, enter and maybe some other keys
    document.getElementById('input').addEventListener('keydown', function (e) {
        //http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
        var TABKEY = 9;
        var ENTERKEY = 13;
        switch(e.keyCode) {
        case TABKEY:
            //TODO: autocomplete
            this.value += 'TABKEY'//demo
            // prevent losing focus
            e.preventDefault()
            break
        case ENTERKEY:
            var expression = this.value
            this.value = ''
            //TODO: parse and execute
            print(expression)
            // autoscroll output area
            output.scrollTop = output.scrollHeight - output.clientHeight
            // prevent inputing \n
            e.preventDefault()
            break
        }
    }, false)
}
// we should init when window loads
window.addEventListener('load', init)

