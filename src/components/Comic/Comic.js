import "./Comic.css";

const Comic = ({ comic }) => {
  return (
    <div className="comic-card">
      <div className="comic-card-img">
        <img
          src={comic.thumbnail.path + "." + comic.thumbnail.extension}
          alt={comic.title}
        />
      </div>
      <div className="comic-card-title-description">
        <h3>{comic.title}</h3>
        <p>{comic.description}</p>
      </div>
    </div>
  );
};
export default Comic;
