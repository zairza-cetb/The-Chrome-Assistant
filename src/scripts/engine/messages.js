class Messages {
  constructor() {
    this.messages = Object.create({});
  }

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

  getMessage(key) {
    if (!this.messages[key]) {
      throw new Error('[TCA] unable to find the message');
    }

    return this.messages.key;
  }

}