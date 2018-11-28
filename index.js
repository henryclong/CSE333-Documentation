for(let i = 0; i < articles.length; i++){
    let images = '<div class="imageContainer">';
    for(let j = 0; j < articles[i].images.length; j++){
        images += '<img src="'
        + articles[i].images[j].src
        + '" alt="'
        + articles[i].images[j].alt
        + '" />';
    }
    images += '</div>';

    $(".articleContainer").append('<div class="article"><h2>'
    + articles[i].title
    + '</h2><h3>'
    + articles[i].date
    + '</h3>'
    + images
    + '<p>'
    + articles[i].content
    + '</p></div>');
}