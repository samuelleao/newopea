"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { EmissionGraphContent } from "../types"

const chartConfig = {
  premio: {
    label: "Prêmio",
    color: "hsl(var(--chart-1))",
  },
  jurosPago: {
    label: "Juros",
    color: "hsl(var(--chart-2))",
  },
  amortizacaoExtraordinaria: {
    label: "Amortização Extraordinaria",
    color: "hsl(var(--chart-3))",
  },
  amortizacao: {
    label: "Amortização",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function Chart({ chartData }: { chartData: EmissionGraphContent[]}) {
  return (
    <Card>
      <section id="pagamentos">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Pagamentos</CardTitle>
          <CardDescription>
            Veja a evolução dos pagamentos realizados
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            
     
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="dataPagamento"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="premio"
              type="natural"
              fill="url(#fillPremio)"
              stroke="var(--color-premio)"
              stackId="a"
            />
            <Area
              dataKey="jurosPago"
              type="natural"
              fill="url(#fillJurosPago)"
              stroke="var(--color-jurosPago)"
              stackId="a"
            />
            <Area
              dataKey="amortizacaoExtraordinaria"
              type="natural"
              fill="url(#fillAmortizacaoExtraordinaria)"
              stroke="var(--color-amortizacaoExtraordinaria)"
              stackId="a"
            />
            <Area
              dataKey="amortizacao"
              type="natural"
              fill="url(#fillAmortizacao)"
              stroke="var(--color-amortizacao)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      </section>
    </Card>
  )
}
