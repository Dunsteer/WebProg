function random5() {
    return Math.floor(Math.random() * Math.floor(5)) + 1;
}

function random7() {
    var niz = new Array(5);

    for (var i = 0; i < 5; i++)
        niz[i] = new Array(5);

    var br = 1;

    for (var i = 0; i < 5; i++)
        for (var j = 0; j < 5; j++) {
            niz[i][j] = (br % 7) + 1;
            br++;
        }

    niz[4][1] = 0;
    niz[4][2] = 0;
    niz[4][3] = 0;
    niz[4][4] = 0;

    var res = 0;

    while (res == 0) {
        var a = random5();
        var b = random5();

        res = niz[a - 1][b - 1];
    }

    return res;
}