import * as SpacerStyle from './styles'
interface Props {
  flex?: number;
  height?: number;
  width?: number;
}


const Spacer = ({ height, width, flex }: Props) => {
  return (
    <SpacerStyle.StyledSpacer height={height} width={width} flex={flex} />
  )
}

export default Spacer;