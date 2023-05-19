var t = 0,
descriptors = ['QUISQUEYA', 'LOS DOMINICANOS', 'EL PLATANO', 'LA CULTURA', 'CRISTO', 'LOS QUISQUEYANOS', 'EL MERENGUE', 'LA BACHATA'],
things = ['CULTURE', 'THE PEOPLE', 'THE BAYAHIBE ROSE', 'THE BIBLE ON YOUR FLAG', 'A PLATE FULL OF FOOD', 'YOUR BEAUTIFUL BEACHES', 'NATURE', 'BROWN SKIN', 'COLORS', 'CHILDREN'],
morals = ['THE SUN', 'WATER', 'GOD', 'LOVE', 'PEACEFULNESS', 'SACRIFICE', 'HISTORY', 'PALM TREES', 'ARTISTS', 'DREAMS'];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return 'LA TIERRA DE ' + choose(descriptors) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WITH ' + choose(things) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KISSED BY ' + choose(morals);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 4000);
}