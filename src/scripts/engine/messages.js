import { messages as preDefMessages } from '../store/messages';

class Messages {
  constructor() {
    this.messages = Object.create({});
  }

  /**
   * Sets the key - value type store.
   * @param {string} key - serves as a key
   * @param {*string} value - serves as the value corresponding to the given key.
   */
  setMessage(key, value) {
    if (!this.messages[key]) {
      this.messages[key] = value;
    } else {
      throw new Error('[TCA] similar message key already declared');
    }
  }

  /**
   * Used to set multiples messages in a single go.
   * @param {[Object]} messages - object of messages {key, value}
   */
  setMessages(messages) {
    for (const m of messages) {
      this.setMessage(m.key, m.value);
    }
  }

  /**
   * Returns the message corresponding to the given key in a key-value pair.
   * @param {string} key - key corresponding to which message is needed in a key - value pair.
   */
  getMessage(key) {
    if (!this.messages[key]) {
      throw new Error(
        `[TCA] unable to find the message corresponding to the key ${key}.`
      );
    }

    return this.messages.key;
  }

  /**
   * Returns an array of predefined messages corresponding to the key.
   * It matches with the object in the `store/messages.js`.
   * @param {string} key - name of the predefined array of messages to be fetched.
   */
  getPreDefined(key) {
    if (!preDefMessages[key]) {
      throw new Error(`[TCA] Predefined message for ${key} does not exists.`);
    }

    return preDefMessages[key];
  }

  /**
   * Returns a random string from the array of pre-defined messages.
   * @param {string} key - name of the pre-defined sentence thats needs
   * to be fetched randomly.
   */
  getPreDefinedRandomized(key) {
    const arr = this.getPreDefined(key),
      l = arr.length;
    return arr[Math.floor(Math.random() * l)];
  }
}

export default Messages;
