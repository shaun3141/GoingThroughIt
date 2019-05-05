var Mailchimp = require('mailchimp-api-v3')
 
var mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

exports.addSubscriber = function(subsciber, res) {
  mailchimp.post('/lists/a249127a38/members/', {
    "email_address": subsciber,
    "status": "subscribed"
    // "merge_fields": {
    //     "FNAME": "Urist",
    //     "LNAME": "McVankab"
    // }
  })
  .then(function(results) {
    console.log(results);
    res.send(results);
  })
  .catch(function (err) {
    console.log(err);
    res.send(err);
  });
}