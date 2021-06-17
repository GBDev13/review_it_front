import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { UserCard } from '../../pages/profile/styles';
import { Legends, LegendItem } from './styles';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

export default function UserChart() {
  const techs = [
    {
      name: 'ReactJS',
      color: '#5ED3F3',
      value: 4
    },
    {
      name: 'NodeJs',
      color: '#8CC84B',
      value: 2
    },
    {
      name: 'JavaScript',
      color: '#F0DB4F',
      value: 6
    },
    {
      name: 'TypeScript',
      color: '#007ACC',
      value: 2
    },
    {
      name: 'Redux',
      color: '#764ABC',
      value: 4
    }
  ];

  const series = techs.map(tech => tech.value);

  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      type: 'pie',
      height: '100%',
      width: '100%'
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      show: false
    },
    labels: techs.map(tech => tech.name),
    colors: techs.map(tech => tech.color),
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
          grid: {
            show: false,
            borderColor: 'transparent'
          }
        }
      }
    ]
  };

  return (
    <UserCard>
      <Chart options={options} series={series} type="pie" className="chart" />
      <Legends>
        {techs.map(tech => (
          <LegendItem key={tech.name} color={tech.color}>
            <div /> <p>{tech.name}</p>
          </LegendItem>
        ))}
      </Legends>
    </UserCard>
  );
}
