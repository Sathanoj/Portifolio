type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
}

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}