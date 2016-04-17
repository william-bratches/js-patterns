// coordinate interactions between multiple objects
const mediator = {};
const orgChart = {
  addNewEmployees: function () {
    // we assume this provides a view with users interact with
    const employeeDetail = this.getEmployeeDetail();
    employeeDetail.on('complete', function (employee) {
      const managerSelector = this.selectManager(employee);
      managerSelector.on('save', function (employee) {
        employee.save();
      })
    });
  }
}
