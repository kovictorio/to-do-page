let trash = ""

let todo = ""

$('button').on('click', () => {
    if ($('#intd').val() !== "") {
        todo = $('#intd').val();
    };
    $("ul").append(
        `<li>${todo} `+` ${trash}</li>`
        );
});