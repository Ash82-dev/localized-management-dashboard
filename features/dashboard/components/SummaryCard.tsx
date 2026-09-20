import { useTranslation } from "react-i18next";

interface SummaryCardProps {
  label: string;
  value: string;
}

function SummaryCard({ label, value }: SummaryCardProps) {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-37.5 w-full flex-col items-center gap-7 rounded-sm bg-surface px-10 py-7 text-on-surface shadow-lg">
      <p className="text-lg">{t(label)}</p>
      <span className="text-2xl font-semibold text-primary">{value}</span>
    </div>
  );
}

export default SummaryCard;
