'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  var mock = require('protractor-http-mock');
  mock.config = {
    rootDirectory: __dirname, // default value: process.cwd()
    protractorConfig: 'protractor.conf.js' // default value: 'protractor.conf'
  };

  mock([{
    request: {
      path: 'http://172.16.0.74:8081/volume',
      method: 'GET'
    },
    response: {
      data: "50"
    }
  },
    {
      request: {
        path: 'http://172.16.0.74:8081/status',
        method: 'GET'
      },
      response: {
        data: "volume: 42%   repeat: off   random: off   single: off   consume: off"
      }
    },
    {
      request: {
          path: 'http://172.16.0.74:8081/playlist',
          method: 'GET'
      },
      response: {
        data: {
          "playlist": [{
            "position": 1,
            "value": "Radio 1"
          }, {
            "position": 2,
            "value": "http://1.2.3.4/radio2"
          }]
        }
      }
    }

  ]);


  browser.get('index.html');

  it('should automatically redirect to /basic when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/basic");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('label')).first().getText()).
        toMatch(/New radio URI/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
