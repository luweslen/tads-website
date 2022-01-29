export type SemesterRawType = {
  id?: string
  name: string
  startDate: Date
  conceptDate: Date
  endDate: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SubjectDataRawType = {
  id?: string
  name: string
  initials: string
  workload: number
  timeCourse: number
  description?: string
  createdAt?: Date
  updatedAt?: Date
}

export type UserRawType = {
  id?: string
  firstName: string
  lastName: string
  email?: string
  phone?: string
  type: 'ADMIN' | 'PROFESSOR' | 'STUDENT'
  createdAt?: Date
  updatedAt?: Date
}

export type ProfessorRawType = {
  id?: string
  institutionalEmail?: string
  graduateArea?: string
  searchAreas?: string
  userId: string
  createdAt?: Date
  updatedAt?: Date
}

export type ProfessorType = ProfessorRawType & {
  user?: UserRawType
}

export type ClassRawType = {
  id?: string
  slug: string
  name: string
  description: string
  startDate: Date
  createdAt?: Date
  updatedAt?: Date
}

export type SubjectRawType = {
  id?: string
  classroomCode?: string
  meetingLink?: string
  classId: string
  professorId: string
  semesterId: string
  subjectDataId: string
  createdAt?: Date
  updatedAt?: Date
}

export type SubjectType = SubjectRawType & {
  class?: ClassRawType
  professor?: ProfessorType
  semester?: SemesterRawType
  data?: SubjectDataRawType
}

export type ScheduleRawType = {
  id?: string
  weekday: string
  startTime: string
  endTime: string
  type: 'ASYNCHRONOUS' | 'SYNCHRONOUS'
  subjectId: string
  createdAt?: Date
  updatedAt?: Date
}

export type ScheduleType = ScheduleRawType & {
  class?: ClassRawType
  subject?: SubjectRawType
}

export type SchedulesByWeekday = {
  Monday?: ScheduleType
  Tuesday?: ScheduleType
  Wednesday?: ScheduleType
  Thursday?: ScheduleType
  Friday?: ScheduleType
}
