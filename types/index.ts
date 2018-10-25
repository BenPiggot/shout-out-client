export type MessageObject = {
  message: string
  reactions: UserReaction[]
  comments: UserComment[]
  type: string
  source: string
  recipient: string[]
  expiration: number
}

export type UserReaction = {
  user: string
  type: string
}

export type UserComment = {
  user: string
  message: string
}