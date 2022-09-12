export type TIdentity = {
  id: string
}

export type TVersion = {
  version: number
}

export type TTimestamps = {
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export type TEntity = TIdentity & TVersion & TTimestamps
