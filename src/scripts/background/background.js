import HttpHandler from './http';

function createResponseInFormat(type, message) {
  return {
    type,
    message
  };
}

function logInTerminal(message) {
  if (typeof message === 'object') {
    console.log(`[TCA] Time: ${new Date()} \t ${JSON.stringify(message)}`);
    return;
  }
  console.log(`[TCA] Time: ${new Date()} \t ${message}`);
}

chrome.runtime.onMessage.addListener(async (message, sender, respond) => {
  switch (message.type) {
    case 'http':
      logInTerminal(message.message);
      const http = new HttpHandler(),
        m = message.message;
      const response = await http.send(m.method, m.url, m.params);
      respond(createResponseInFormat('http', response));
      break;

    case 'query':
      logInTerminal(`type: query; query: ${JSON.stringify(message.message)}`);
      respond(
        createResponseInFormat('query', {
          result: 'success',
          wasMessage: message.message
        })
      );
      break;

    default:
      logInTerminal(`type: ${message.type}; message: ${message.message}`);
      respond(createResponseInFormat('test', { status: 'working' }));
  }
});
