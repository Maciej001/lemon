const gutterWidth = 2; // rem
const outerMargin = 2; // rem

const breakPoints = {
  xs: 30,
  sm: 48,
  md: 64,
  lg: 75,
}

const weights = {
  normal: '400',
  bold: '700',
  superBold: '800'
}

const colors = {
  dark: "#021C0C",
  primary: '#0ECF5C',
  primaryLight: '#79FF9E ',
  primaryDark: '#0BA84B',
  primaryLightlyTransparent:  'rgba(14,207,92, 0.7)',
  primaryGrey: '#69947B',
  grey: '#1F2622',
  lightGrey: '#B6C7E1',
  transparent: 'rgba(255,255,255, 0.8)',
  danger: '#FF6C66'
};

const margins = {
  xxl: "60px",
  xl: "40px",
  lg: "20px",
  md: "10px",
  sm: "5px"
};

const fontSizes = {
  blockquote: "150%",
  xxl: "300%",
  xl: "225%",
  lg: "175%",
  md: "112.5%",
  nm: "100%",
  sm: "80%",
  xs: "65%",
  jumbo: "250%",
  jumboSubtitle: "200%"
};

const fontFamily = {
  sansSerif: "'Open Sans', sans-serif",
  serif: "'Lora', serif"
}

const radius = {
  sm: "3px",
  md: "5px",
  lg: "10px"
};

const Theme = {
  maxWidth: "960px",
  smWidth: "760px",
  gutterWidth: `${gutterWidth}`,
  outerMargin: `${outerMargin}`,
  gutterCompensation: `${(-gutterWidth) / 2}`,
  halfGutterWidth: `${gutterWidth / 2}`,
  screenXsMin: `${breakPoints.xs}rem`,
  screenSmMin: `${breakPoints.sm}rem`,
  screenMdMin: `${breakPoints.md}rem`,
  screenLgMin: `${breakPoints.lg}rem`,
  containerSm: breakPoints.sm + gutterWidth,
  containerMd: breakPoints.md + gutterWidth,
  containerLg: breakPoints.lg + gutterWidth,
  colors,
  fontSizes,
  fontFamily,
  weights,
  margins,
  radius,
  breakPoints,
  header: {
    height: "60px"
  }
};

export default Theme;
