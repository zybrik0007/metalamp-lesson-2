import {displayActivate} from '../dropdown-template/dropdown-template'
import '../dropdown-template/dropdown-template.scss'


function clickPeopleQuantity(plusId, minusId, valueId) {
    $(plusId).click(() => {
        if(Number($(valueId).val()) + 1 < 10) {
            $(valueId).val(Number($(valueId).val()) + 1)
            valueInputPeople( '#' + 'people','#' + 'adults', '#' + 'children', '#' + 'infants')
            activationReset('#' + 'people', '#' + 'reset')
        }
    })

    $(minusId).click(() => {
        if(Number($(valueId).val()) - 1 > -1) {
            $(valueId).val(Number($(valueId).val()) - 1)
            valueInputPeople( '#' + 'people','#' + 'adults', '#' + 'children', '#' + 'infants')
            activationReset('#' + 'people', '#' + 'reset')
        }
    })


}

function valueInputPeople(valueInput, valueAdults, valueChildren, valueInfants) {
    const adultsArr_1 = 1;
    const adultsArr_234 = [2, 3, 4];
    const adultsArr_56789 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    let quantityAdults = Number($(valueAdults).val()) + Number($(valueChildren).val());
    let adults = '';

    const infantsArr_1 = '1';
    const infantsArr_234 = ['2', '3', '4'];
    const infantsArr_56789 = ['5', '6', '7', '8', '9'];
    const quantityInfants = $(valueInfants).val();
    let infants = '';

    if (quantityAdults === adultsArr_1) {
        adults = '1 гость'
    }

    if (adultsArr_234.indexOf(quantityAdults) !== -1) {
        adults = quantityAdults + ' гостя'
    }

    if (adultsArr_56789.indexOf(quantityAdults) !== -1) {
        adults = quantityAdults + ' гостей'
    }

    if(quantityInfants === infantsArr_1) {
        infants = quantityInfants + ' младенец'
    }

    if(infantsArr_234.indexOf(quantityInfants) !== -1) {
        infants = quantityInfants + ' младенца'
    }
    if(infantsArr_56789.indexOf(quantityInfants) !== -1) {
        infants = quantityInfants + ' младенцев'
    }

    if(quantityAdults !==0 && quantityInfants !=='0') {
        $(valueInput).val(adults + ', ' + infants)
    } else {
        $(valueInput).val(adults + infants)
    }


}

function activationReset(valueInput, reset) {
    if($(valueInput).val() === '') {
        $(reset).css('color', '#ffffff');
        $(reset).disabled = true;
    } else {
        $(reset).css('color', '#BC9CFF');
        $(reset).disabled = false;
    }
}

function resetButton(resetId, valueAdults, valueChildren, valueInfants, valueInput) {
    $(resetId).click(() => {
        $(valueAdults).val(0);
        $(valueChildren).val(0);
        $(valueInfants).val(0);
        $(valueInput).val('');
        $('.dropdown__container-settings').hide()
        if($('.dropdown__value').attr('data-active') === 'true') {
            $('.dropdown__value').attr('data-active', false)
        } else {
            $('.dropdown__value').attr('data-active', true)
        }
        displayActivate()
    })
}

function applyButton(applyId) {
    $(applyId).click((e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        $('.dropdown__container-settings').hide()
        if($('.dropdown__value').attr('data-active') === 'true') {
            $('.dropdown__value').attr('data-active', false)
        } else {
            $('.dropdown__value').attr('data-active', true)
        }
        displayActivate()
    })
}

clickPeopleQuantity('#' + 'plusAdults', '#' + 'minusAdults', '#' + 'adults')

clickPeopleQuantity('#' + 'plusChildren', '#' + 'minusChildren', '#' + 'children')

clickPeopleQuantity('#' + 'plusInfants', '#' + 'minusInfants', '#' + 'infants')

resetButton('#' + 'reset', '#' + 'adults', '#' + 'children', '#' + 'infants', '#' + 'people')

applyButton('#' + 'apply');





