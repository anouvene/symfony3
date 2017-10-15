// Upload file
function bs_input_file() {
    $(".input-file").before(

        function() {
            if ( !$(this).prev().hasClass('input-ghost') ) {
                var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0'>");
                element.attr("name",$(this).attr("name"));
                element.change(function(){
                    element.next().find('input').val((element.val()).split('\\').pop());
                });
                $(this).find("button.btn-choose").click(function(){
                    element.click();
                });
                $(this).find("button.btn-reset").click(function(){
                    element.val(null);
                    $(this).parents(".input-file").find('input').val('');
                });
                $(this).find('input').css("cursor","pointer");
                $(this).find('input').mousedown(function() {
                    $(this).parents('.input-file').prev().click();
                    return false;
                });
                return element;
            }
        }
    );
}

$(function(){
    // Traiter connexion
    function traiterConnexion(){
        let data = $('#formConnexion').serialize();
        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: data
        });
    }

    $('#adminBtn').click(function(){
        $('#modalConnexion').modal('show');

        $('#clickConnexion').click(function(){
            traiterConnexion();
            $('#modalConnexion').modal('hide');
        });
    });

    // Récupérer les paramètres GET d’une URL avec JavaScript
    function $_GET(param) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );

        if ( param ) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }

    // Scroll
    //$('body').scrollspy({target: "#menu"});
   /* $('#backToTop, #menu li:gt(0) a').on('click', function(e) {

        e.preventDefault();

        let $this = $(this);
        let hash = this.hash;

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function() {
            window.location.hash = hash;
            if ($this.hasClass('glyphicon-edit')) {
                window.location.href = 'http://php/php_mvc/index.php/update?id=' + $this.attr('rel') + hash;
            } /!*else if($this.parents().hasClass('navbar-nav')){
                window.location.href = 'http://php/php_mvc/index.php?filtre=' + $this.attr('rel') + '#produits';
            }*!/


        });

    });*/




     bs_input_file();



});