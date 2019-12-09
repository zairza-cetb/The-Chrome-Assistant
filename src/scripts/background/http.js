export default class Http {
  constructor() {
    this.HTTP = new XMLHttpRequest();
  }

  formatParams(params) {
    const d = new FormData();
    for (const p of params) {
      d.append(p, params[p]);
    }
    return d;
  }

  send(method, url, params) {
    this.HTTP.onreadystatechange = () => {
      if (this.HTTP.readyState === 4 && this.HTTP.status === 200) {
        return new Promise((resolve, _) => {
          resolve(this.HTTP.responseText);
        });
      }

      this.HTTP.open(method, url, true);
      this.HTTP.send(this.formatParams(params));
    };
  }
}
