import Lines from "@components/lines";
import Layout from "@components/layout";

export default function HomePage() {
  return (
    <Layout className="flex h-screen items-center justify-center">
      <div className="grid grid-flow-col auto-cols-max no-select">
        <Lines>
          <h1 className="col-span-2 row-start-2 text-4xl md:text-5xl font-light tracking-wider">
            joseluis@jeylso.dev
          </h1>
        </Lines>
      </div>
    </Layout>
  );
}
