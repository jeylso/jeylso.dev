import Layout from "@components/layout";
import LinesContainer from "@components/lines-container";

export default function HomePage({ email }) {
  return (
    <Layout className="flex h-screen items-center justify-center">
      <div className="grid grid-flow-col auto-cols-max no-select">
        <LinesContainer email={email}>
          <h1 className="col-span-2 row-start-2 text-4xl md:text-5xl font-light tracking-wider">
            {email}
          </h1>
        </LinesContainer>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const email = process.env.EMAIL;
  return { props: { email } };
}
