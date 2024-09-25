for (let i = 1; i < 13; i += 2) {


    for (let k = 13; k > i; k--) {

        document.write("&nbsp");

    }

    for (let j = 0; j < i; j++) {

        document.write("*");

    }
    document.write("<br />")

}
for (let i = 13; i >= 1; i -= 2) {


    for (let k = 13; k > i; k--) {

        document.write("&nbsp");

    }

    for (let j = 0; j < i; j++) {

        document.write("*");

    }
    document.write("<br />")

}