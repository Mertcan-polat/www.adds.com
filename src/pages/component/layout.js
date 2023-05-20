import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);
  let [color] = useState("#E57C23");
  const router = useRouter();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    backgroundColor: "#E8F6EF",
    marginTop: "350px",
    height: "full",
    justifyContent: "center",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [router.locales, router.pathname]);

  return (
    <div>
      {loading ? (
        <ClimbingBoxLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
