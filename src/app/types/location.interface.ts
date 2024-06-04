export interface Location{
  id: number,
  title: string,
  content: string,
  opened: boolean,
  towel: string,
  fountain: string,
  locker_room: string,
  schedules: Schedule[]
}

interface Schedule{
  weekdays: string,
  hours: string,
}
