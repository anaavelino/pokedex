import { styled } from '@mui/material/styles';

const CustomDiv = styled('div')(
  ({ direction, justifyContent, align, flex, padding, margin, wrap }) => ({
    display: 'flex',
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: align,
    flex: wrap,
    padding,
    margin,
  })
);

export default function FlexBox({
  children,
  direction,
  flex,
  justify,
  align,
  padding,
  wrap,
  sx,
}) {
  return (
    <CustomDiv
      sx={sx}
      direction={direction}
      justify={justify}
      align={align}
      flex={flex}
      padding={padding}
      wrap={wrap}
    >
      {children}
    </CustomDiv>
  );
}

FlexBox.defaultProps = {
    sx:'',
    direction:'row',
    justify:'start',
    align:'center',
    flex: '1 1 auto',
    padding: '',
    margin:'',
    wrap:''
}
