// notify observers of changes to subject state

// OBSERVERS
function ObserverList() {
  this.observerList = [];
};

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function (obj) {
  return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
  if (index > -1 index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  let i = startIndex;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
}

ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice(index, 1);
}

// SUBJECT
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
}

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
}

Subject.prototype.notify = function (context) {
  let observerCount = this.observers.count();
  for (let i = 0; i < observerCount, i++) {
    this.observers.get(i).update(context);
  }
}

// a single observer will look like...
function Observer() {
  this.update = function () {
    // ...
  }
}

// let's pretend we have this HTML:
//<button id='addNewObserver'>Add New Observer</button>
//<input id='mainCheckBox' type='checkBox'/>
//<div id='observersContainer'></div>

// notify state change on checkbox click
const controlCheckbox = $('#mainCheckBox');
_.extend(controlCheckbox, new Subject());

controlCheckbox.onClick(function () {
  controlCheckbox.notify(controlCheckbox.checked);
})

// add observers
function addNewObserver() {
  var check = document.createElement('input');
  check.type = 'checkbox';
  _.extend(check, new Observer());
  check.update = function (value) {
    this.checked = value;
  }

  // add to main subject
  controlCheckbox.addObserver(check);

  // add it to DOM
  container.appendChild(check);
}



const addBtn = $('#addNewObserver');
