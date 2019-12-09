import SupportedLanguages from '../../store/supported-languages';

export class WebSpeech {
  constructor(
    targetElementIDtoShowResult,
    maxPermissibleRecursiveTargetElementCheck
  ) {
    this.WebSpeech = new webkitSpeechRecognition();
    this.targetID = targetElementIDtoShowResult;
    this.countPermissibleTarget = maxPermissibleRecursiveTargetElementCheck;
    this.langSupport = SupportedLanguages;

    this.initBinderProps();
  }

  initBinderProps() {
    console.warn('inside binder');
    this.WebSpeech.continous = true;
    if (!this.isTargetAvailable(0)) {
      throw new Error(`[TCA] unable to find the target element with the
        ID: ${this.targetID} at an recursive count of ${this.countPermissibleTarget}.`);
    }
    this.WebSpeech.start();
    this.WebSpeech.onresult = e => {
      const messageUserSpeech = document.getElementById(this.targetID);
      let tmp = '';
      if (e.results.length > 0) {
        // marks presence of transcripted comforting words.
        messageUserSpeech.value +=
          e.results[e.results.length - 1][0].transcript;
        tmp += e.results[e.results.length - 1][0].transcript;
        console.warn('in iteration tmp is ', tmp);
      }
    };
  }

  isTargetAvailable(recursiveCount) {
    const r = document.getElementById(this.targetID);
    if (recursiveCount > this.countPermissibleTarget) {
      return false;
    }
    if (!r) {
      setTimeout(() => {
        this.isTargetAvailable(recursiveCount + 1);
      }, 500);
    }

    return true;
  }
}
