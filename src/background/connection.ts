import Port = browser.runtime.Port;
import { Action } from '../core/types';
export interface Message {
  action: Action;
  source: string;
}

export type ActionCallback = (action: Action) => void;
export type DisposeListener = () => void;

let listeners: Array<ActionCallback> = [];

console.log('Initialise connection');
chrome.runtime.onMessage.addListener((message: Message) => {
  if (message.source !== 'client') return;
  console.log('Received client message:', message);
  listeners.forEach((listener) => listener(message.action));
});

export function listenToClientActions(callback: ActionCallback): DisposeListener {
  listeners = [...listeners, callback];
  return () => {
    const listenerIndex = listeners.indexOf(callback);
    if (listenerIndex === -1) return;
    listeners = [
      ...listeners.slice(0, listenerIndex),
      ...listeners.slice(listenerIndex + 1),
    ];
  };
}

export function sendAction(action: Action): void {
  chrome.runtime.sendMessage({
    action,
    source: 'background',
  });
}
