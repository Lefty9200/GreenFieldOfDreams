(function(app) {

  app.ActivityCreateComponent = ActivityComponent;

  function ActivityComponent(dataService) {
    //this.name = dataService.getActivity();
  }
  ActivityComponent.parameters = [
    app.DataService
  ];
  ActivityComponent.annotations = [
    new ng.core.Component({
      selector: 'createActivity',
      templateUrl: 'app/joinedEvents.html'
    })
  ];

})(window.app = window.app || {});
