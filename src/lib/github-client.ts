import { REPO_OWNER, REPO_NAME, GitHubFile } from "./github";

const CACHE_TTL = 5 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

function getCached<T>(key: string): T | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function setCache<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

export async function fetchRepoContent(path: string = ""): Promise<GitHubFile[]> {
  const cacheKey = `content:${path}`;
  const cached = getCached<GitHubFile[]>(cacheKey);
  if (cached) return cached;

  try {
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    const files: GitHubFile[] = data.map((item: any) => ({
      name: item.name,
      path: item.path,
      type: item.type === "dir" ? "dir" : "file",
      download_url: item.download_url,
    }));

    setCache(cacheKey, files);
    return files;
  } catch (error) {
    console.error("Error fetching repo content:", error);
    return [];
  }
}

export async function fetchFileContent(path: string): Promise<string> {
  const cacheKey = `file:${path}`;
  const cached = getCached<string>(cacheKey);
  if (cached) return cached;

  try {
    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) return "";

    const data = await res.json();
    if (Array.isArray(data) || data.type !== "file" || !data.content) return "";

    const content = atob(data.content);
    setCache(cacheKey, content);
    return content;
  } catch (error) {
    console.error("Error fetching file content:", error);
    return "";
  }
}
