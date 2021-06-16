import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { UserCard } from './styles';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

export default function ProfileGrid() {
  const series = [44, 55, 13, 43, 22];

  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      type: 'pie'
    },
    stroke: {
      show: false
    },
    labels: ['ReactJs', 'NodeJs', 'JavaScript', 'TypeScript', 'Redux'],
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    grid: {
      show: true,
      borderColor: 'transparent',
      padding: {
        top: 35,
        right: 0,
        bottom: 35,
        left: 0
      }
    }
  };

  return (
    <UserCard>
      <Chart
        options={options}
        series={series}
        type="pie"
        height="100%"
        width="100%"
      />
    </UserCard>
  );
}
