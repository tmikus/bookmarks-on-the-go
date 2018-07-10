import { Action } from '../core/types';

export interface Message {
  action: Action;
  source: string;
}

export type ActionCallback = (action: Action) => void;
export type DisposeListener = () => void;

let listeners: Array<ActionCallback> = [];

console.log('Connecting to the background script');
chrome.runtime.onMessage.addListener((message: Message) => {
  if (message.source !== 'background') return;
  listeners.forEach((listener) => listener(message.action));
});

export function listenToBackgroundActions(callback: ActionCallback): DisposeListener {
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
  chrome.runtime.sendMessage({ source: 'client', action });
}
