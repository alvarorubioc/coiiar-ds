const headingBase = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  mt: 0,
  mb: 3,
  '::before': {
    content: '" "',
    display: 'block',
    paddingTop: 30,
    marginBottom: 40,
    borderBottom: '1px solid',
    borderBottomColor: 'borderColor'
  }
};

export default {
  h1: {
    ...headingBase,
    fontSize: 7
  },
  h2: {
    ...headingBase,
    fontSize: 6
  },
  h3: {
    ...headingBase,
    fontSize: 5
  },
  h4: {
    ...headingBase,
    fontSize: 4
  },
  h5: {
    ...headingBase,
    fontSize: 3
  },
  h6: {
    ...headingBase,
    fontSize: 2
  }
};
