var Mailchimp = require('mailchimp-api-v3')
 
var mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

exports.addSubscriber = function(subsciber) {
  mailchimp.post('/3.0/lists/a249127a38/members/', {
    "email_address": "shaun.t.vanweelden@gmail.com",
    "status": "subscribed"
    // "merge_fields": {
    //     "FNAME": "Urist",
    //     "LNAME": "McVankab"
    // }
  })
  .then(function(results) {
    return results;
  })
  .catch(function (err) {
    return err;
  });
}