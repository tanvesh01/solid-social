export const getPadding = (aspectRatio: string): Record<'padding-top', string> => {
  const config: Record<string, { 'padding-top': string }> = {
    '1:1': {
      'padding-top': '100%',
    },
    '16:9': {
      'padding-top': '56.25%',
    },
    '4:3': {
      'padding-top': '75%',
    },
    '3:2': {
      'padding-top': '66.66%',
    },
    '8.5': {
      'padding-top': '62.5%',
    },
  };
  return config[aspectRatio];
};

export const isDefined = <T>(value: T | undefined | null): value is T =>
  value !== undefined && value !== null;

export const createStyleSheet = (href: string): void => {
  const link = document.createElement(`link`);

  link.type = `text/css`;
  link.rel = `stylesheet`;
  link.href = href;

  document.querySelectorAll(`head`)[0].append(link);
};

export const createScriptTag = (providerEmbedScript: string): void => {
  const script = document.createElement(`script`);
  script.type = `text/javascript`;
  script.textContent = providerEmbedScript;
  script.addEventListener('error', (error) => console.error(`SolidSocialError`, error));
  document.querySelectorAll(`head`)[0].append(script);
};

export const createTestId = (
  id: string
): {
  'data-testid'?: string;
} => ({
  ...(import.meta.env?.NODE_ENV === 'test' && { 'data-testid': id }),
});
