module.exports = {
  'sendMail': [{
    title: 'To Phone',
    type: 'string'
  },{
    title: 'Subject',
    type: 'string'
  },{
    title: 'Message',
    type: 'object'
  },{
    title: 'Do not Send Before',
    type: 'number',
    required: false
  },{
    title: 'Do not Send After',
    type: 'number',
    required: false
  }]
};
