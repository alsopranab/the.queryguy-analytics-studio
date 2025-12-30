import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Optional, for higher rate limits
});

export const REPO_OWNER = "alsopranab";
export const REPO_NAME = "the.queryguy";

export interface GitHubFile {
  name: string;
  path: string;
  type: "file" | "dir";
  content?: string;
  download_url?: string;
}

export async function getRepoContent(path: string = ""): Promise<GitHubFile[]> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
    });

    if (Array.isArray(data)) {
      return data.map((item: any) => ({
        name: item.name,
        path: item.path,
        type: item.type,
        download_url: item.download_url,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching repo content:", error);
    return [];
  }
}

export async function getFileContent(path: string): Promise<string> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
    });

    if (!Array.isArray(data) && data.type === "file" && "content" in data) {
      // GitHub content is base64 encoded
      const content = Buffer.from(data.content, "base64").toString("utf-8");
      return content;
    }
    return "";
  } catch (error) {
    console.error("Error fetching file content:", error);
    return "";
  }
}

export async function searchCommunityProjects(query: string = "data analytics") {
  try {
    const { data } = await octokit.rest.search.repos({
      q: `${query} topic:data-analytics`,
      sort: "stars",
      order: "desc",
      per_page: 12,
    });
    return data.items;
  } catch (error) {
    console.error("Error searching community projects:", error);
    return [];
  }
}
