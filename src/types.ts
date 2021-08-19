import type { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

export type AppData = any;

export type Page<P = any> = NextPage<P> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};
export type getSSProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
> = GetServerSideProps<P & AppData, Q>;

export interface Player {
  id: string;
  name: string;
}
