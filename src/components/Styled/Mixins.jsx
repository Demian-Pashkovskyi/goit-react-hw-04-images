export const font = ({ fs, fw, lh }) => `
  font-size: ${fs ? `${fs}px` : "16px"};
  font-weight: ${fw ? fw : 500};
  line-height: ${lh ? Number(lh / fs).toFixed(2) : 1.5};`;

export const flex = ({ fw, ai, jc }) => `
display: flex;
flex-wrap: ${fw ? fw : "no-wrap"};
align-items:${ai ? ai : "center"};
justify-content:${jc ? jc : "center"};
  `;
	export const centerBlock = `
  display: block;
  margin: 0 auto;
`;

export const block = `
  display: block;
  margin: 0 auto;
`;

export const widthHeight = (w, h) => `
  width: ${w ? `${w}px` : "100%"};
  height: ${h ? `${h}px` : "auto"} ;
`;