import React from "react";
import styles from "@/src/components/blog/blogCard.module.css";
import { classes } from "@/src/utils/style";

export interface BlogProps {
  title: string;
  description: string;
  link: string;
}

export interface BlogCardProps {
  blog: BlogProps;
  isDark: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isDark }) => {
  const openUrlInNewTab = (url: string, name: string) => {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    win?.focus();
  };

  return (
    <div onClick={() => openUrlInNewTab(blog.link, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p
            className={
              isDark
                ? classes(styles.small_dark, styles.small)
                : classes(styles.small)
            }
          >
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
