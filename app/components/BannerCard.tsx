interface Props {
  title: string;
  image: string;
}

export default function BannerCard({ title, image }: Props) {
  return (
    <div
      className="h-56 rounded-2xl bg-cover bg-center flex items-end p-6"
      style={{
        backgroundImage: `linear-gradient(to top, black, transparent), url(${image})`,
      }}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
}
