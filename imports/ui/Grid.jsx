import styled from 'styled-components';

export const FluidContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 ${props => props.theme.outerMargin}rem;
  width: 100%;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.halfGutterWidth}rem;
  box-sizing: border-box;
  max-width: ${props => props.theme.maxWidth};
  min-width: ${props => props.theme.screenXsMin};
  @media only screen and (min-width: ${props => props.theme.screenSmMin}) {
    width: ${props => props.theme.screenSmMin};
  }
  @media only screen and (min-width: ${props => props.theme.screenMdMin}) {
    width: ${props => props.theme.screenMdMin};
  }
  @media only screen and (min-width: ${props => props.theme.screenLgMin}) {
    width: ${props => props.theme.screenLgMin};
  }
`

export const ContainerSmall = styled(Container)`
  max-width: ${props => props.theme.smWidth};
`

export const ContainerWide = styled(Container)`
    max-width: 1400px;
`

export const Row = styled.div`
  width: 100
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  margin: 0 ${props => props.theme.gutterCompensation}rem;
  flex-direction: ${props => {
    if (!!props.reverse && !props.column) return "row-reverse"
    if (!!props.column && !props.reverse) return "column"
    if (!!props.reverse && !!props.column) return "column-reverse"
    return "row"
  }};
`

export const Cell = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  padding: 0 ${props => props.theme.halfGutterWidth}rem;
  flex-basis: ${props => !!props.xs ? 100*props.xs/12 : 0}%
  max-width: ${props => !!props.xs ? 100*props.xs/12 : 100}%
  margin-left: ${props => !!props.xsOffset ? 100*props.xsOffset/12 : 0}%;
  justify-content: ${props => {
    if (!!props.start) return "flex-start"
    if (!!props.end) return "flex-end"
    if (!!props.center) return "center"
    if (!!props.around) return "space-around"
    if (!!props.between) return "space-between"
    return "flex-start"
  }};
  text-align: ${props => {
      if (!!props.center) return "center"
      if (!!props.start) return "start"
      if (!!props.end) return "end"
      return "start"
    }};
  align-items: ${props => {
    if (!!props.middle) return "center"
    if (!!props.bottom) return "flex-end"
    return "flex-start"
  }};
  order: ${ props => {
    if (!!props.first) return -1
    if (!!props.last) return 1
    return 0
  }};

  @media only screen and (min-width: ${props => props.theme.screenXsMin}) {
    margin-left: ${props => {
      if (!!props.smOffset) return 100*props.smOffset/12
      if (!!props.xsOffset) return 100*props.xsOffset/12
      return 0
    }}%;
    flex-basis: ${props => {
      if (!!props.sm) return 100*props.sm/12
      if (!!props.xs) return 100*props.xs/12
      return 0
    }}%;
    max-width: ${props => {
      if (!!props.sm) return 100*props.sm/12
      if (!!props.xs) return 100*props.xs/12
      return 100
    }}%;
  }

  @media only screen and (min-width: ${props => props.theme.screenMdMin}) {
    margin-left: ${props => {
      if (!!props.mdOffset) return 100*props.mdOffset/12
      if (!!props.smOffset) return 100*props.smOffset/12
      if (!!props.xsOffset) return 100*props.xsOffset/12
      return 0
    }}%;
    flex-basis: ${props => {
      if (!!props.md) return 100*props.md/12
      if (!!props.sm) return 100*props.sm/12
      if (!!props.xs) return 100*props.xs/12
      return 0
    }}%;
    max-width: ${props => {
      if (!!props.md) return 100*props.md/12
      if (!!props.sm) return 100*props.sm/12
      if (!!props.xs) return 100*props.xs/12
      return 100
    }}%;
  }

  @media only screen and (min-width: ${props => props.theme.screenLgMin}) {
    margin-left: ${props => {
      if (!!props.lgOffset) return 100*props.lgOffset/12
      if (!!props.mdOffset) return 100*props.mdOffset/12
      if (!!props.smOffset) return 100*props.smOffset/12
      if (!!props.xsOffset) return 100*props.xsOffset/12
      return 0
    }}%;
    flex-basis: ${props => {
      if (!!props.lg) return 100*props.lg/12
      if (!!props.md) return 100*props.md/12
      if (!!props.sm) return 100*props.sm/12
      if (!!props.xs) return 100*props.xs/12
      return 0
    }}%;
    max-width: ${props => {
      if (!!props.lg) return 100*props.lg/12
      if (!!props.md) return 100*props.md/12
      if (!!props.sm) return 100*props.sm/12
      if (!!props.xs) return 100*props.xs/12
      return 100
    }}%;
  }
`