interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold">{title}</h2>

      <button className="text-red-500 hover:text-red-400 transition">
        View All →
      </button>
    </div>
  );
}
