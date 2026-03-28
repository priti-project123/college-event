export const chartData = {
  labels: ['March', 'April', 'May'],
  datasets: [
    {
      label: 'Registered Events',
      data: [3, 7, 5],
      backgroundColor: 'rgba(99, 102, 241, 0.6)',
      borderRadius: 6,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};
