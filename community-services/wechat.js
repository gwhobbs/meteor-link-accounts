if (Meteor.isClient) {
  Meteor.linkWithWechat = function (options, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(402, 'Please login to an existing account before link.');
    }
    if(!Package['leonzhang1109:accounts-wechat']) {
      throw new Meteor.Error(403, 'Please include leonzhang1109:accounts-wechat package')
    }

    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
    Wechat.requestCredential(options, credentialRequestCompleteCallback);
  };
}
