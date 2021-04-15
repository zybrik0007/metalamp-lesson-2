displayActivate();

export function displayActivate() {
    if($('.dropdown__value').attr('data-active') === 'true') {
        $('.dropdown__value').css('border-radius','4px 4px 0 0 ')
        $('.dropdown__container-settings').css('display', 'block')
    } else {
        $('.dropdown__value').css('border-radius','4px')
        $('.dropdown__container-settings').css('display', 'none')
    }
}


$('.dropdown__value').click((e) => {
    e.preventDefault();
    if($('.dropdown__value').attr('data-active') === 'true') {
        $('.dropdown__value').attr('data-active', false)
    } else {
        $('.dropdown__value').attr('data-active', true)
    }

    displayActivate()




    //$('.dropdown__container-settings').hide();
    //$('.dropdown__value').css('border-bottom-left-radius', '0').css('border-bottom-right-radius', '0');
})
