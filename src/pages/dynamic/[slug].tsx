import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { createServerApi } from '@api/server';
import { Player } from '@types';

interface Response {
  player: Player;
}

type Props = Response;

const DynamicPage = (props: Props) => {
  return (
    <div>
      {props.player.name} - {props.player.id}
    </div>
  );
};

type Params = { slug: string };

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await createServerApi().api.get<Response>(`/players/${params.slug}`);

    return {
      revalidate: 300,
      props: res.data,
    };
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      throw error;
    }

    if (error.response?.status === 404) {
      return {
        notFound: true,
      };
    }

    throw error;
  }
};

export default DynamicPage;
