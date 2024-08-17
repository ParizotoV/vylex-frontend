import styled from 'styled-components'

export const Typograph = styled('text').withConfig({
  shouldForwardProp: (prop) => !['size', 'color', 'bold'].includes(prop)
})<TypographProps>(({ theme, size = 'MD', color = '#231F20', bold }) => ({
  color,
  fontSize: `${theme.FONT_SIZE[size]}px`,
  fontWeight: bold ? 600 : 400,
  a: {
    color: theme.PALLETE.NEUTRAL[100]
  }
}))
