$(document).ready(function() {
    $('.addition-button').on('click', clickAddition);
    $('.subtraction-button').on('click', clickSubtraction);
    $('.multiplication-button').on('click', clickMultiplication);
    $('.division-button').on('click', clickDivision);

    $('.clear-button').on('click', removeData);


});

function clickAddition() {
    event.preventDefault();
    var values = {};
    $.each($('#numericalValues').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#numericalValues').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/add',
        data: values,

        success: function(data) {
            appendDom(data);
            console.log('From Server: ', data);
            console.log(data);
        }
    });

}

function clickSubtraction() {
    event.preventDefault();
    var values = {};
    $.each($('#numericalValues').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#numericalValues').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/subtract',
        data: values,

        success: function(data) {
            appendDom(data);
            console.log('From Server: ', data);
            console.log(data);
        }
    });

}

function clickMultiplication() {
    event.preventDefault();
    var values = {};
    $.each($('#numericalValues').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#numericalValues').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/multiply',
        data: values,

        success: function(data) {
            appendDom(data);
            console.log('From Server: ', data);
            console.log(data);
        }
    });

}

function clickDivision() {
    event.preventDefault();
    var values = {};
    $.each($('#numericalValues').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#numericalValues').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/divide',
        data: values,

        success: function(data) {
            appendDom(data);
            console.log('From Server: ', data);
            console.log(data);
        }
    });

}

function appendDom(data) {
    $('#results').append('<div></div>');
    var $el = $('#results').children().last();

    $el.append('<p>' + data + '</p>');
}

function removeData() {
    $('#results').children().last().remove();
}




