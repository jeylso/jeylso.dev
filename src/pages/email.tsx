import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EmailPage() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = `mailto:${process.env.EMAIL}`;
    router.push("/", undefined, { shallow: true });
  }, []);

  return <h1 className="hidden">Email</h1>;
}
