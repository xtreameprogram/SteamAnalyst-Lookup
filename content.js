var host = location.host.toLowerCase();
if (host === "csgolounge.com") {
    csgolounge();
} else if (host === "csgotraders.net") {
    csgotraders();
}

function findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];

    return null;
}



function csgotraders() {
    $('.steamitem-wrapper').click(function(event) {
        if (findElement(weapons.weapons, "value", $(this).children().eq(0).attr("data-displayname"))) {
            chrome.runtime.sendMessage({
                "new_tab": findElement(weapons.weapons, "value", $(this).children().eq(0).attr("data-displayname")).data
            });
        }

        console.log(findElement(weapons.weapons, "value", $(this).children().eq(0).attr("data-displayname")));
    });
}

function csgolounge() {
    $('.smallimg').click(function(event) {
        if (findElement(weapons.weapons, "value", $(this).attr("alt")).data) {
            chrome.runtime.sendMessage({
                "new_tab": findElement(weapons.weapons, "value", $(this).attr("alt")).data
            });
        }
        console.log(findElement(weapons.weapons, "value", $(this).attr("alt")).data);
    });
}
