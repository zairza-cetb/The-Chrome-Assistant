chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case 'http-request':
      console.log('recevied messaeg');
      break;
  }
});
