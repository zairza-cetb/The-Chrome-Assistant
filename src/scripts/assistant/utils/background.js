/**
 * This component of the engine is used to link the engine with the background-scripts.
 */

export class Background {
  send(type, message) {
    chrome.runtime.sendMessage(
      {
        type,
        message
      },
      response => {
        console.warn('got response as ', response);
        return response;
      }
    );
  }

  /**
   * It is used to make an http-request.
   * @param {string} url - URL of the requested resource.
   * @param {string} method - request method.
   * @param {[string]} params - array of params.
   * @returns {Promise}
   */
  HttpRequest(url, method, params) {
    this.send('http', {
      url,
      method,
      params
    });
  }

  Query(message) {
    return this.send('query', {
      message
    });
  }

  TestMessagesArch() {
    this.send('test', { status: 'working' });
  }
}
