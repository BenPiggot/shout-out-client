export type MessageObject = {
  checked: boolean
  createdAt: number
  heat: number
  total_heat: number
  message: string
  reactions: UserReaction[]
  comments: UserComment[]
  type: string
  source: string
  recipient: string[]
  expiration: number
  shout_id: string
  visibility: boolean
}

export type UserReaction = {
  user: string
  type: string
}

export type UserComment = {
  user: string
  message: string
}

// checked: false
// comments: []
// createdAt: 1540561740300
// expiration: 1540563531.235694
// heat: 27
// message: "@drosenbloom+approved+my+app!"
// reactions: []
// shout_id: "e45b883a-d925-11e8-9af0-aab66cd97e80"
// source: "slack"
// total_heat: 30
// type: "general"
// updatedAt: 1540561740300
// visibilityTimeout: 1540562692
// visible: true