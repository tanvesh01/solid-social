import { createScriptLoader } from '@solid-primitives/script-loader';

export const twttrClasses = [
  '.twitter-tweet',
  '.twitter-timeline',
  '.twitter-follow-button',
  '.twitter-mention-button',
  '.twitter-hashtag-button',
].join(',');

const twttrLoad = (): void =>
  window.twttr?.widgets?.load?.(document.querySelectorAll(twttrClasses));

export const handleTwttrLoad = (): { status: 'createScriptLoader' | 'twttrLoad' } => {
  if (document.querySelector(twttrClasses) && !window.twttr) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    return {
      status: 'createScriptLoader',
    };
  }
  twttrLoad();
  return {
    status: 'twttrLoad',
  };
};
