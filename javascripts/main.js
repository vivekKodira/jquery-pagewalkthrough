$(document).ready(function() {
    // Set up tour
    $('body').pagewalkthrough({
        name: 'introduction',
        steps: [{
           popup: {
               content: '#walkthrough-1',
               type: 'modal'
           }
        }, {
            wrapper: 'header .ribbon-inner',
            popup: {
                content: '#walkthrough-2',
                type: 'tooltip',
                position: 'left',
                offsetVertical: 150
            },
            margin: '-10px 0 -20px 0'
        }]
    });

    // Show the tour
    $('body').pagewalkthrough('show');
});
