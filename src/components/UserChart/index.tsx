import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { UserCard } from '../../pages/profile/styles';
import { Legends, LegendItem } from './styles';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

interface ITech {
  name: string;
  id: string;
  hex_color: string;
}

interface IStat {
  id: string;
  reviews: number;
  technology: ITech;
  technology_id: string;
  user_id: string;
}

interface UserChartProps {
  stats: IStat[];
}

export default function UserChart({ stats }: UserChartProps) {
  const formatedStats = stats.map(item => item.technology);
  const formatedStatsValues = stats.map(item => item.reviews);

  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      type: 'pie'
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      show: false
    },
    labels: formatedStats.map(tech => tech.name),
    colors: formatedStats.map(tech => tech.hex_color),
    grid: {
      show: true,
      borderColor: 'transparent',
      padding: {
        top: 35,
        right: 0,
        bottom: 35,
        left: 0
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            width: '100%',
            height: '350px'
          },
          grid: {
            show: false
          }
        }
      },
      {
        breakpoint: 400,
        options: {
          chart: {
            width: '100%',
            height: '250px'
          }
        }
      }
    ]
  };

  return (
    <UserCard>
      <Chart
        options={options}
        series={formatedStatsValues}
        type="pie"
        width="100%"
        height="100%"
      />
      <Legends>
        {stats.map(tech => (
          <LegendItem key={tech.id} color={tech.technology.hex_color}>
            <div /> <p>{tech.technology.name}</p>
          </LegendItem>
        ))}
      </Legends>
    </UserCard>
  );
}
