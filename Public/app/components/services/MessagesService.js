(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Electromagnetic radiation',
        userName: 'Wilhelm Conrad Röntgen',
        date: '1901',
        text: 'In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Spin theory',
        userName: 'Wolfgang Pauli',
        date: '1945',
        text: 'For the discovery of the Exclusion Principle, also called the Pauli principle'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
