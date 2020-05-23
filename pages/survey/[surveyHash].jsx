import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Display = () => {
  const router = useRouter();
  const { surveyHash } = router.query;
  const Survey = dynamic(() => import("../../components/Survey"), {
    ssr: false,
  });

  return <Survey surveyHash={surveyHash} />;
};

export default Display;
