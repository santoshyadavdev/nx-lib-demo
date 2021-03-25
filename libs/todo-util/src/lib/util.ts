export function getStatus(status: string) {
  switch (status) {
    case 'Active':
      return 1;
    case 'Closed':
      return 0;
    case 'InProgress':
      return 2;
    default:
      return -1;
  }
}
