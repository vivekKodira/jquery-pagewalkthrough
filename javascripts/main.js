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
            wrapper: '.inner h2',
            popup: {
                content: '#walkthrough-2',
                type: 'tooltip',
                position: 'bottom'
            }
        }, {
            wrapper: 'a[href="pages/source-docs.html#default-options"]',
            popup: {
                content: '#walkthrough-3',
                type: 'tooltip',
                position: 'right'
            }
        }, {
            wrapper: 'a[href="pages/source-docs.html"]',
            popup: {
                content: '#walkthrough-4',
                type: 'tooltip',
                position: 'right'
            }
        }, {
            wrapper: 'a[href="https://github.com/warby-/jquery-pagewalkthrough"]',
            popup: {
                content: '#walkthrough-5',
                type: 'tooltip',
                position: 'left'
            }
        }, {
            wrapper: '#download-options',
            popup: {
                content: '#walkthrough-6',
                type: 'tooltip',
                position: 'left'
            }
        }]
    });

    // Show the tour
    $('body').pagewalkthrough('show');
});
