"use client";

import {
  Bar,
  BarChart,
  BarRectangleItem,
  Rectangle,
  Tooltip,
  TooltipContentProps,
  XAxis,
  YAxis,
} from "recharts";
import { useRecordsChart } from "../hooks/use-records-chart";
import { useTranslation } from "react-i18next";
import { categoryColors, toLocalizedChartLabelKey } from "../mappers";
import { Category, categoryOptions } from "../types";

function RecordsBarChart() {
  const { t } = useTranslation();
  const { recordsChartData } = useRecordsChart();
  const isEmpty = recordsChartData.data.length === 0;
  const data = !isEmpty
    ? recordsChartData.data
    : categoryOptions.map((category) => {
        return { category, count: 0 };
      });

  return (
    <div className="h-96 w-full rounded-sm bg-surface p-4 shadow-lg" dir="ltr">
      <div className="h-full w-full overflow-x-auto pt-4">
        <div className="h-full min-w-125 pb-4">
          <BarChart
            data={data}
            responsive
            accessibilityLayer={false}
            style={{ width: "100%", height: "100%" }}
          >
            {isEmpty && (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--on-background)"
              >
                {t("common:msg_no_result")}
              </text>
            )}

            <Tooltip content={CustomTooltip} cursor={false} />

            <XAxis
              dataKey="category"
              tickMargin={12}
              axisLine={{ stroke: "var(--on-background)" }}
              tickLine={{ stroke: "var(--on-background)" }}
              tick={{ fill: "var(--on-background)" }}
              tickFormatter={(value) =>
                t(toLocalizedChartLabelKey[value as Category])
              }
            />

            <YAxis
              dataKey="count"
              width={30}
              axisLine={{ stroke: "var(--on-background)" }}
              tickLine={{ stroke: "var(--on-background)" }}
              tick={{ fill: "var(--on-background)" }}
              tickMargin={12}
            />

            <Bar dataKey="count" barSize={30} shape={CategoryBar} />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: TooltipContentProps) => {
  const { t } = useTranslation();

  if (!active || !payload?.[0] || typeof label !== "string") {
    return null;
  }

  const category = label as Category;
  const labelKey = toLocalizedChartLabelKey[category];

  return (
    <div className="rounded-sm bg-surface-variant p-2">
      <p>{`${t(labelKey)} : ${payload[0].value}`}</p>
    </div>
  );
};

const CategoryBar = (props: BarRectangleItem) => {
  const color = categoryColors[props.payload.category as Category];

  return <Rectangle {...props} fill={color} />;
};

export default RecordsBarChart;
