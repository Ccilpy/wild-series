interface SeriesProps {
  series: {
    id: number;
    title: string;
    synopsis: string;
    poster: string;
    country: string;
    year: number;
  }[];
}

export default function Series({ series }: SeriesProps) {
  return (
    <ul>
      {series.map((serie) => (
        <li key={serie.id}>
          <h2>{serie.title}</h2>
          <p>
            {serie.country} - {serie.year}
          </p>
          <p>{serie.synopsis}</p>
          <img src={serie.poster} alt={`${serie.title} poster`} />
        </li>
      ))}
    </ul>
  );
}
