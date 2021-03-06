function createMailing4ApartmentUser (execlib) {
  'use strict';

  var lib = execlib.lib, 
    q = lib.q,
    qlib = lib.qlib;

  function UserMixin () {
  }
  UserMixin.prototype.destroy = function (sinkname) {
  };

  function genericSendMailViaService (sinkname) {
    var methodname = 'sendMailVia'+sinkname;
    var ret = function (to, subject, msgtexthtmlobj, notbefore, notafter, defer) {
      if (!this.__service) {
        return q.reject(new lib.Error('APARTMENT_DESTROYED', 'This apartment is already destroyed'));
      }
      qlib.promise2defer(this.__service[methodname](to, subject, msgtexthtmlobj, notbefore, notafter), defer);
    };
    return ret;
  };


  UserMixin.addMethods = function (klass, sinkname) {
    klass.prototype['sendMailVia'+sinkname] = genericSendMailViaService(sinkname);
  };

  return UserMixin;
}
module.exports = createMailing4ApartmentUser;

