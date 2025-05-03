// Wait for the DOM (Document Object Model) to be fully loaded before executing the script
$(document).ready(() => {

    // Attach an event listener to the input field with the ID 'text'
    // This listener triggers on the 'keyup' event (when a key is released)
    $('#text').on('keyup', (event) => {
        // Get the current value of the input field and update the HTML content
        // of all elements with the class 'preview' to match the input value
        $('.preview').html($(event.currentTarget).val());
    });

    // Attach an event listener to the select dropdown with the ID 'font'
    // This listener triggers on the 'change' event (when a new option is selected)
    $('#font').on('change', (event) => {
        // Get the selected font family value and apply it as the 'font-family' CSS property
        // to all elements with the class 'preview'
        $('.preview').css({
            fontFamily: $(event.currentTarget).val()
        });
    });

    // Attach an event listener to the select dropdown with the ID 'weight'
    // This listener triggers on the 'change' event (when a new option is selected)
    $('#weight').on('change', (event) => {
        // Get the selected font weight value and apply it as the 'font-weight' CSS property
        // to all elements with the class 'preview'
        $('.preview').css({
            fontWeight: $(event.currentTarget).val()
        });
    });

    // Attach an event listener to the input field with the ID 'size'
    // This listener triggers on the 'keyup' event (when a key is released)
    $('#size').on('keyup', (event) => {
        // Get the current value of the input field, append 'px' to it to form a valid CSS size,
        // and apply it as the 'font-size' CSS property to all elements with the class 'preview'
        let fontSize = $(event.currentTarget).val() + 'px';
        $('.preview').css({
            fontSize: fontSize
        });
    });

});