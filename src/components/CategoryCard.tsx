import Link from "next/link";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  count: number;
}

export default function CategoryCard({ id, title, description, icon, gradient, count }: CategoryCardProps) {
  return (
    <Link href={`/${id}`}>
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:shadow-accent/10">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

        <div className="relative z-10">
          <div className="mb-4 text-5xl">{icon}</div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">{title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted">
              {count} {count === 1 ? "prosjekt" : "prosjekter"}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
              Se mer →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
