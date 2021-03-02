console.log("Hello World");

// Setup the worker
const worker = new Worker('./worker.js')

// Every 10 seconds ask worker to do "something", this is just an example, you probably wouldn't use an interval
const intervalId = setInterval(function() {
  const parameters = []
  worker.postMessage(parameters);
  console.log('Message posted to worker');
}, 10000)

// Event listener for result
worker.onmessage = function(event) {
  console.log('Message received from worker', event.data);
}

// Clean up or computer will hate you
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();

  // Clear interval to prevent memory leakage
  clearInterval(intervalId)

  // Terminate the worker
  worker.terminate()
});