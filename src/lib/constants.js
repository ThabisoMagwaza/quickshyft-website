export const COLORS = {
  Primary5: 'var(--color-primary-5)',
  Primary64: 'var(--color-primary-64)',
  Primary87: 'var(--color-primary-87)',
  Primary95: 'var(--color-primary-95)',

  AccentOne28: 'var(--color-accent-one-28)',
  White: 'var(--color-white)',
};

const BREAKPOINTS = {
  MOBILE: 600,
  TABLET: 950,
  LAPTOP: 1300,
};

export const QUERIES = {
  mobileAndUp: `(min-width: ${BREAKPOINTS.MOBILE / 16}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.TABLET / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.LAPTOP / 16}rem)`,
};
