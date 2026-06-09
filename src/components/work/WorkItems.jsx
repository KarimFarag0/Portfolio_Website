import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      {item.image ? (
        <img src={item.image} alt={item.title} className="work__img" />
      ) : (
        <div className="work__img-placeholder">
          <span>{item.title.split('—')[0].trim()}</span>
        </div>
      )}
      <h3 className="work__title">{item.title}</h3>
      <p className="work__subtitile">{item.subtitle}</p>

      {(item.liveUrl || item.githubUrl) && (
        <div className="work__links">
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work__link"
            >
              <i className="bx bx-link-external" /> Live
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work__link"
            >
              <i className="bx bxl-github" /> GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default WorkItems
