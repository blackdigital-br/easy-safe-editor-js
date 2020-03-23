jQuery(document).ready(function($) {

    //Link Logo En
    $('.language-en .navbar-brand').attr('href', '/en/');

    // Mascaras
    if ($(".data-mask").length != 0) {
        $(".data-mask").mask("99/99/9999");
    }

    if ($(".tel-mask").length != 0) {
        $(".tel-mask").mask("(99) 9999-9999");
    }

    if ($(".cel-mask").length != 0) {
        $(".cel-mask").mask("(99) 99999-9999");
    }

    if ($(".cep-mask").length != 0) {
        $(".cep-mask").mask("99999-999");
    }

    if ($(".cpf-mask").length != 0) {
        $(".cpf-mask").mask("999.999.999-99");
    }

    if ($(".cnpj-mask").length != 0) {
        $(".cnpj-mask").mask("99.999.999/9999-99");
    }

    if ($(".telcel-mask").length != 0) {
        $(".telcel-mask").mask('(99) 9999-9999?9')
            .focusout(function(event) {
                var target, phone, element;
                target = (event.currentTarget) ? event.currentTarget : event.srcElement;
                phone = target.value.replace(/\D/g, '');
                element = $(target);
                element.unmask();
                if (phone.length > 10) {
                    element.mask('(99) 99999-999?9');
                } else {
                    element.mask('(99) 9999-9999?9');
                }
            });
        
    }

    // CAROUSEL
    $('.carousel').carousel({
        interval: 60000
    })
});