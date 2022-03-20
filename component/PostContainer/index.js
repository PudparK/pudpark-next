import React from "react";
import styles from "./styles.module.scss";

function Blog({ blogPost }) {
  return (
    <div className={styles.Post}>
      <div className={styles.cover}>
        <img src={blogPost.cover_image} alt="Pudpark Developer" />
      </div>
      <div className={styles.PostContent}>
        <div className={styles.articleHeader}>
          <h2>{blogPost.title}</h2>
          <ul className={styles.tagList}>
            {blogPost.tag_list.map((tag, i) => {
              return (
                <li className={"defaultColor " + tag} key={`Tag: ${i}`}>
                  {tag}
                </li>
              );
            })}
          </ul>
          <p className={styles.author + " text-red"}>
            by {blogPost.user.username.toUpperCase()} on{" "}
            {new Date(blogPost.published_at).toLocaleDateString()}
          </p>
        </div>
        <div className={styles.articleBody}>
          <p>{blogPost.description}</p>
        </div>
      </div>
    </div>
  );
}

function Project({ project }) {
  return (
    <div className={styles.Post}>
      {project.homepageUrl ? (
        <iframe
          scrolling="no"
          src={project.homepageUrl}
          className={styles.scrollbar}
          title={project.description}
        ></iframe>
      ) : (
        ""
      )}
      <div className={styles.articleHeader}>
        <a href={project.homepageUrl ? project.homepageUrl : ""}>
          <h2>{project.name}</h2>
        </a>
        <p className="text-red">{project.createdAt}</p>
      </div>
      <div className={styles.articleBody}>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

function PostContainer({ data, postType }) {
  return (
    <article>
      {postType === "blog"
        ? data.map((blogPost, i) => <Blog blogPost={blogPost} key={i} />)
        : data.data.user.repositories.nodes.map((project, key) => {
          return project.homepageUrl ? (
            <Project project={project} key={key} />
          ) : null;
        })}
    </article>
  );
}

export default PostContainer;
