import { ResponsiveBar } from "@nivo/bar"
import { useMemo } from "react"
import dayjs from "dayjs"
import ptBRLLocale from 'dayjs/locale/pt-br'
import { theme } from "../../styles/theme";
import { formatCurrency } from "../../utils/format-currency";

dayjs.locale(ptBRLLocale);


const apiData = [
    {
        _id: {
            year: 2024,
            month: 1,
        },
        balance: 408900,
        incomes: 764343,
        expenses: 435678,
    },
    {
        _id: {
            year: 2024,
            month: 2,
        },
        balance: 408900,
        incomes: 764343,
        expenses: 435678,
    },
    {
        _id: {
            year: 2024,
            month: 3,
        },
        balance: 408900,
        incomes: 764343,
        expenses: 435678,
    },
    {
        _id: {
            year: 2024,
            month: 4,
        },
        balance: 408900,
        incomes: 764343,
        expenses: 435678,
    }
]


type ChartData = {
    month: string;
    Saldo: number;
    Receitas: number;
    Despesas: number;

}

export function FinancialEvolutionBarChart() {
    const data = useMemo<ChartData[]>(() => {
        const chartData: ChartData[] = apiData.map(item => ({
            month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
            Saldo: item.balance,
            Receitas: item.incomes,
            Despesas: item.expenses,

        }))

        return chartData

    }, [])

    return (
        <ResponsiveBar
            data={data}
            keys={['Saldo', 'Receitas', 'Despesas']}
            colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
            indexBy={'month'}
            groupMode="grouped"
            enableLabel={false}
            enableGridY={false}
            padding={0.2}
            axisLeft={{
                tickSize: 0,
                format: formatCurrency
            }}
            margin={{ left: 80, bottom: 28 }}
            valueFormat={formatCurrency}
            theme={{
                text: {
                    fontFamily: 'Lexend',
                    fontSize: 10,
                    color: theme.colors.white,

                },
                axis: {
                    ticks: {
                        text: {
                            fill: theme.colors.white,
                        },
                    },
                },
                tooltip: {
                    container: {
                        backgroundColor: theme.colors.black,
                        padding: 16,
                        color: theme.colors.white,
                        fontFamily: 'Lexend',
                        fontSize: 12,
                        borderRadius: 4

                    },
                },

            }}

        />
    )
}