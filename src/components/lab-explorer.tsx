"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, File, ChevronRight, ChevronLeft, Search } from "lucide-react";
import { GitHubFile } from "@/lib/github";
import { fetchRepoContent, fetchFileContent } from "@/lib/github-client";
import { LabSkeleton, ContentSkeleton } from "@/components/skeletons";
import { ContentViewer } from "@/components/content-viewer";

interface LabExplorerProps {
  initialPath?: string[];
}

export function LabExplorer({ initialPath = [] }: LabExplorerProps) {
  const router = useRouter();
  const [path, setPath] = useState<string[]>(initialPath);
  const [items, setItems] = useState<GitHubFile[]>([]);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const currentPath = path.join("/");
  const parentPath = path.slice(0, -1);
  const currentName = path[path.length - 1] || "Lab";

  const loadContent = useCallback(async (targetPath: string) => {
    setLoading(true);
    setFileContent(null);

    const content = await fetchRepoContent(targetPath);
    
    if (content.length > 0) {
      setItems(content);
      setLoading(false);
    } else {
      const file = await fetchFileContent(targetPath);
      if (file) {
        setFileContent(file);
        setItems([]);
      }
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContent(currentPath);
  }, [currentPath, loadContent]);

  const navigateTo = (newPath: string[]) => {
    setPath(newPath);
    const url = newPath.length > 0 ? `/lab/${newPath.join("/")}` : "/lab";
    router.push(url, { scroll: false });
  };

  const handleItemClick = (item: GitHubFile) => {
    navigateTo([...path, item.name]);
  };

  const goBack = () => {
    navigateTo(parentPath);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-12"
      >
        {path.length > 0 && (
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to {parentPath.length > 0 ? parentPath[parentPath.length - 1] : "Lab"}
          </button>
        )}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{currentName}</h1>
            {path.length === 0 && (
              <p className="text-lg text-muted-foreground">
                Explore the raw intelligence of the studio.
              </p>
            )}
            {path.length > 0 && !fileContent && (
              <p className="text-sm text-muted-foreground font-mono">{currentPath}</p>
            )}
          </div>
          {!fileContent && items.length > 0 && (
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
              />
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {fileContent === null && items.length === 0 ? (
              path.length > 0 ? <ContentSkeleton /> : <LabSkeleton />
            ) : (
              <LabSkeleton />
            )}
          </motion.div>
        ) : fileContent ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContentViewer content={fileContent} filename={currentName} />
          </motion.div>
        ) : (
          <motion.div
            key="items"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {filteredItems.map((item, i) => (
              <motion.button
                key={item.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
                onClick={() => handleItemClick(item)}
                className="group glass-card p-4 rounded-xl flex items-center gap-3 text-left transition-all hover:bg-secondary/50 active:scale-[0.99]"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background">
                  {item.type === "dir" ? (
                    <Folder className="w-4 h-4" />
                  ) : (
                    <File className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-medium text-sm truncate">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {item.type === "dir" ? "Folder" : "File"}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            ))}
            {filteredItems.length === 0 && searchQuery && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No items match "{searchQuery}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
