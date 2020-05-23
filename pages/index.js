import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <Link href="/survey/surveyHash">
      <a>Go to an example survey</a>
    </Link>
  );
}
