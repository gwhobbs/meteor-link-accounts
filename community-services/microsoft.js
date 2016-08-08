if (Meteor.isClient) {
  Meteor.linkWithMicrosoft = function (options, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(402, 'Please login to an existing account before link.');
    }
    if(!Package['ghobbs:microsoft2']) {
      throw new Meteor.Error(403, 'Please include ghobbs:microsoft2 package');
    }

    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
    Microsoft.requestCredential(options, credentialRequestCompleteCallback);
  };
}
