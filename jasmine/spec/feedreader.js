
$(function() {

    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a URL defined', function() {
           allFeeds.forEach(function(object) {
               expect(object.url).toBeDefined();
               expect(object.url.length).not.toBe(0);
           })
         });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined', function() {
           allFeeds.forEach(function(object) {
               expect(object.name).toBeDefined();
               expect(object.name.length).not.toBe(0);
           })
         });
    });

    describe('The menu', function() {

      /* Test that ensures the menu element is
       * hidden by default.
       */
       it('is hidden by default', function() {
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });

       /* Test that ensures the menu changes
        * visibility when the menu icon is clicked.
        */
        it('toggles visibility on click', function() {
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {

      /* Test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       beforeEach(function(done) {
         loadFeed(0, done);
       });

       it('has at least 1 entry within the feed', function() {
         expect($('.feed').children.length).not.toBe(0);
       });

    });

    describe('New Feed Selection', function() {

      /* Test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
       var firstFeed;
       var secondFeed;
       beforeEach(function(done) {
         loadFeed(0, function() {
           firstFeed = $('.feed').html();
           loadFeed(1, function() {
             secondFeed = $('.feed').html();
             done();
           })
         })
       });

       it('loads new feed', function() {
         expect(firstFeed != secondFeed).toBe(true);
       })

    })


}());
