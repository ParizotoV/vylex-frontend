import { GetServerSidePropsContext, PreviewData } from 'next'
import { destroyCookie } from 'nookies'
import { ParsedUrlQuery } from 'querystring'

export const destroySession = (ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  destroyCookie(ctx, 'ischoll.name')
  destroyCookie(ctx, 'ischoll.token')
}
