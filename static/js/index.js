var h;
var a;

function jump(a) {
    h = $(window).height();
    $("html, body").scrollTop(a * h + 6 * a);
    console.log(a * h + 6 * a);
}

function pilot() {
    if ($("html, body").scrollTop() < 0.5 * h) {
        document.getElementById("q").style.backgroundColor = "rgb(161, 171, 238)";
        document.getElementById("w").style.backgroundColor = "snow";
        document.getElementById("e").style.backgroundColor = "snow";
        document.getElementById("r").style.backgroundColor = "snow";
        document.getElementById("t").style.backgroundColor = "snow";
        document.getElementById("y").style.backgroundColor = "snow";
    } else {
        if ($("html, body").scrollTop() < 1.5 * h + 6) {
            document.getElementById("w").style.backgroundColor = "rgb(161, 171, 238)";
            document.getElementById("q").style.backgroundColor = "snow";
            document.getElementById("e").style.backgroundColor = "snow";
            document.getElementById("r").style.backgroundColor = "snow";
            document.getElementById("t").style.backgroundColor = "snow";
            document.getElementById("y").style.backgroundColor = "snow";
        } else {
            if ($("html, body").scrollTop() < 2.5 * h + 12) {
                document.getElementById("e").style.backgroundColor =
                    "rgb(161, 171, 238)";
                document.getElementById("q").style.backgroundColor = "snow";
                document.getElementById("w").style.backgroundColor = "snow";
                document.getElementById("r").style.backgroundColor = "snow";
                document.getElementById("t").style.backgroundColor = "snow";
                document.getElementById("y").style.backgroundColor = "snow";
            } else {
                if ($("html, body").scrollTop() < 3.5 * h + 18) {
                    document.getElementById("r").style.backgroundColor =
                        "rgb(161, 171, 238)";
                    document.getElementById("q").style.backgroundColor = "snow";
                    document.getElementById("e").style.backgroundColor = "snow";
                    document.getElementById("w").style.backgroundColor = "snow";
                    document.getElementById("t").style.backgroundColor = "snow";
                    document.getElementById("y").style.backgroundColor = "snow";
                } else {
                    if ($("html, body").scrollTop() < 4.5 * h + 24) {
                        document.getElementById("t").style.backgroundColor =
                            "rgb(161, 171, 238)";
                        document.getElementById("q").style.backgroundColor = "snow";
                        document.getElementById("e").style.backgroundColor = "snow";
                        document.getElementById("r").style.backgroundColor = "snow";
                        document.getElementById("w").style.backgroundColor = "snow";
                        document.getElementById("y").style.backgroundColor = "snow";
                    } else {
                        document.getElementById("y").style.backgroundColor =
                            "rgb(161, 171, 238)";
                        document.getElementById("q").style.backgroundColor = "snow";
                        document.getElementById("e").style.backgroundColor = "snow";
                        document.getElementById("r").style.backgroundColor = "snow";
                        document.getElementById("t").style.backgroundColor = "snow";
                        document.getElementById("w").style.backgroundColor = "snow";
                    }
                }
            }
        }
    }
}

$(window).scroll(function () {
    h = $(window).height();
    pilot();
    animation();
});

window.onload = pilot();

function animation() {
    if ($("html, body").scrollTop() > 4 * h + 24) {
        award.style.opacity =
            (1 - ($("html, body").scrollTop() - (4 * h + 24)) / h) * 100 + "%";

        end.style.opacity =
            (($("html, body").scrollTop() - (4 * h + 24)) / h) * 100 + "%";
        a = ($("html, body").scrollTop() - (4 * h + 24)) / h + 0.3;
        if (a < 1) {
            end.style.transform = "scale(" + a + ")";
        } else {
            end.style.transform = "scale(1)";
        }
    } else {
        if ($("html, body").scrollTop() > 3 * h + 18) {
            people.style.opacity =
                (1 - ($("html, body").scrollTop() - (3 * h + 18)) / h) * 100 + "%";

            award.style.opacity =
                (($("html, body").scrollTop() - (3 * h + 18)) / h) * 100 + "%";
        } else {
            if ($("html, body").scrollTop() > 2 * h + 12) {
                film.style.opacity =
                    (1 - ($("html, body").scrollTop() - (2 * h + 12)) / h) * 100 + "%";

                people.style.opacity =
                    (($("html, body").scrollTop() - (2 * h + 12)) / h) * 100 + "%";
            } else {
                if ($("html, body").scrollTop() > 1 * h + 6) {
                    his.style.opacity =
                        (1 - ($("html, body").scrollTop() - (1 * h + 6)) / h) * 100 + "%";

                    film.style.opacity =
                        (($("html, body").scrollTop() - (1 * h + 6)) / h) * 100 + "%";
                } else {
                    first.style.opacity =
                        (1 - $("html, body").scrollTop() / h) * 100 + "%";

                    his.style.opacity = ($("html, body").scrollTop() / h) * 100 + "%";
                }
            }
        }
    }
}
