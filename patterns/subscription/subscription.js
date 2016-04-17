// FROM ADDY OSMANI'S DESIGN PATTERNS
// similar to observer,  but more decoupled/can define unique behavior for every subscriber
// this commented out code was an example usage - actual implementation is below
// const messagesReceived = 0;
// const subscriber1 = subscribe('inbox/newMessage', function(topic, data) {
//   console.log('a message was received about ', topic);
//   // render data on frontend
//   $('.messageSender').html(data.sender);
//   $('.messagePreview').html(data.body);
// });
//
// // similar to subscriber2, but different function
// const subscriber2 = subscriber('inbox/newMessage', function(topic, data) {
//   $('.newMessageCounter').html(++mailCounter);
// });
//
// publish('inbox/newMessage', [{
//   sender: 'hello@google.com',
//   body: 'hey there! how are you doing today?',
// }])

const pubsub = {};
(function(myObject) {

  // topics we can listen for
  const topics = {};

  // a topic identifier
  let subUid = -1;

  // publish topics of interest
  myObject.publish = function (topic, args) {
    if (!topics[topic]) {
      return false;
    }
    const subscribers = topics[topic];
    const len = subscribers ? subscribers.length : 0; // this is weird. why would subscribers be undefined? we already check for it.
    while (len--) {
      subscribers[len].func(topic, args);
    return this;
  }

  myObject.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    const token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func,
    });

    return token;
  }

  myObject.unsubcribe = function(token) {
    for (let m in topics) {
      if (topics[m]) { // in what situation would an undefined end up in our topics?
        for (let i = 0; i < topics[m].length; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }

      }
    }
    return this;
  };
})(pubsub);

// implementation
const messageLogger = function (topic, data) {
  console.log(`Logging ${topic} and ${data}`);
};

// subscribers trigger callback when event is broadcast on topic
const subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

// publishers handle publishing notifications
pubsub.publish('inbox/newMesasge', ['test', 'a', 'b', 'c']);
