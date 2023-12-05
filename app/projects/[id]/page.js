import { useRouter } from "next/navigation.js"

export default function ProjectDetail({params}) {
  console.log(params);
  return <p>Post: {params.id}</p>
}