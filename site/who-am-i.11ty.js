class WhoAmI {
  data() {
    return {
      permalink: "/who-am-i.json",
      buildTime: (new Date()).toISOString()
    };
  }

  render(data) { return JSON.stringify({ buildTime: data.buildTime }) }
}

module.exports = WhoAmI;