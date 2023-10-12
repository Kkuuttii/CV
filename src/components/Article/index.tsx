interface Article {
  title: string;
  text: string;
  time: string;
}

export function Article({ title, text, time }: Article) {
  return (
    <article className="mt-3">
      <h3 className="font-bold">{title}</h3>
      <span>{text}</span>
      <span className="italic">{`(${time})`}</span>
    </article>
  );
}
