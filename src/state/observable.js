export class CustomObservable {
  constructor() {
    this.subscribers = {};
    this.lastSubscriberId = 0;
  }

  subscribe(cb) {
    this.lastSubscriberId++;
    this.subscribers = {
      ...this.subscribers,
      [this.lastSubscriberId]: cb,
    };

    return this.lastSubscriberId;
  }

  unsubscribe(id) {
    delete this.subscribers[id];
  }

  notifyChange(newState) {
    Object.values(this.subscribers).forEach((cb) => cb(newState));
  }
}
