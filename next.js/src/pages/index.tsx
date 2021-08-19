import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Player } from '@types';
import { createServerApi } from '@api/server';

const IndexPage = (props: Props) => {
  return (
    <div>
      {props.winners.map((item) => (
        <div key={item.id}>
          <Link prefetch={false} href={getPlayerPageHref(item.name)}>
            <a>{item.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

type Props = Response;

type Response = {
  winners: Array<Player>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await createServerApi().get<{ data: Response }>('/stats');

  return {
    revalidate: 300,
    props: res.data.data,
  };
};

const getPlayerPageHref = (slug: string) => ({
  pathname: `/dynamic/[slug]`,
  query: {
    slug,
  },
});

export default IndexPage;
