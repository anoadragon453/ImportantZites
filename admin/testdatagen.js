/*
Copy the content of the file to the developers console and hit enter, to generate some random Zite-entries.
You can also call the `genTestData`-Function with c, which is any number, to generate c-amount of entries.
*/

var zites_list = document.getElementById("zites_list");
var zites_table = document.getElementById("zites_table");

var allZites = document.querySelectorAll("#zites_list > tr");

function rS(c, str) {
    var c = typeof c === "number" ? c : 1,
        str = str || '';

    while (c--)
        str += Math.random().toString(36).substr(2, 5);

    return str;
}

function genTestData(c, zite) {
    var c = typeof c === "number" ? c : 10;

    while (c--) {
        (function(zite2) {
            var zite = typeof zite2 === "object" ? zite2 : {
                "address": rS(7),
                "title": rS(2),
                "description": rS(10),
                "category": rS(1)
            };

            zites_list.innerHTML +=
                "<tr class='cat-" + zite.category + "'><th><a href='/" + zite.address + "'>" +
                zite.title + "</a></th><td>" + zite.description +
                " <code class='category' style='font-style: italic;'>" +
                zite.category.toUpperCase() + "</code></td></tr>";
        })(zite)
    }

    TweenLite.to(zites_table, 3, {
        autoAlpha: 2
    });

    allZites = document.querySelectorAll("#zites_list > tr");
}
genTestData()