export function newEvent(eventName: string, bubbles = false, cancelable = false): CustomEvent<any> {
  const evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}
