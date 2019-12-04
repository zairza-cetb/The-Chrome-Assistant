### The Chrome Assistant

#### Overview

Chrome has come a long way from the day it started and was developed actively by Google. However, the web remains a field where technologies and research that can never come to a stall. Hence, the concept of extensions came into existence. These utilities extend the features of the browser by injecting javascript into necessary and thus modifying the DOM structure. Right from the start, with the version chrome 5.0.375, till date with chrome 78.0.3904, there have been a number of enhancements, changes, fixes, etc. However, several useful features like the voice-speech search, offline pages, regular user-centric content, etc is still a miss.


The solution to the above involves in development of a native Google Chrome extension, that would be smart to cover most points, and also integrate necessary features via code injection, in a nutshell, a smart personal assistant.


_**Note:** During the development of Jarvis Personal Assistant, various assistant specific tasks were developed and automated via a REST API. These developed tasks would be directly used in this project using a simple Http request to the hosted web application. Other features would be done by native scrapping in the browser using js script itself._


#### Installation

Follow these steps in order:

Pre-requisite: `node v10.16.3 & npm v6.9.0` _(earlier versions may work as well)_

1. `sudo npm install -g gulp@3.9.1`.
2. `npm install -D gulp@3.9.1`.
3. `npm install --only=dev`
3. `gulp build` _(may require `sudo` permissions)_.
4. Open chrome and search `chrome://extensions` or click on the three dots in the upper right corner and follow `More tools>Extensions`.
5. Turn on (toggle) the developer settings.
6. Click `load unpacked` and navigate to the `pkg` directory of `The-Chrome-Assistant`.
7. Click on open.
