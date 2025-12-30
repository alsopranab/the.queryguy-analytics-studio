import { LabExplorer } from "@/components/lab-explorer";

interface LabPathPageProps {
  params: Promise<{
    path: string[];
  }>;
}

export async function generateMetadata({ params }: LabPathPageProps) {
  const { path } = await params;
  const name = path[path.length - 1];
  return {
    title: `${name} | The Lab | @the.queryguy`,
  };
}

export default async function LabPathPage({ params }: LabPathPageProps) {
  const { path } = await params;
  return <LabExplorer initialPath={path} />;
}
