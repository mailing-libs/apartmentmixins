function createMailing4ApartmentService (execlib) {
  'use strict';

  var lib = execlib.lib, 
    q = lib.q,
    qlib = lib.qlib;

  function ServiceMixin () {
  }

  function genericSendMailThruHotel (sinkname) {
    var methodname = 'sendMailVia'+sinkname;
    var ret = function (to, subject, msgtexthtmlobj, notbefore, notafter) {
      if (!this.__hotel) {
        return q.reject(new lib.Error('HOTEL_DESTROYED', 'The hotel instance of this apartment is already destroyed'));
      }
      return this.__hotel[methodname](to, subject, msgtexthtmlobj, notbefore, notafter);
    };
    return ret;
  };

  ServiceMixin.addMethods = function (klass, sinkname) {
    klass.prototype['sendMailVia'+sinkname] = genericSendMailThruHotel(sinkname);
  };

  return ServiceMixin;
}
module.exports = createMailing4ApartmentService;
