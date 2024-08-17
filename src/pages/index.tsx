export default function Home() {
  return null;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/login',
    },
  };
};
