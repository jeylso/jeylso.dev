import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EmailPage({ email }) {
  const router = useRouter();

  useEffect(() => {
    window.location.href = `mailto:${email}`;
    router.push("/", undefined, { shallow: true });
  }, []);

  return <h1 className="hidden">Email</h1>;
}

export function getStaticProps() {
  const email = process.env.EMAIL;
  return { props: { email } };
}
