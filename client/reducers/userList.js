const initialUserList = []

export default function (userList = initialUserList, action) {
  switch (action.type) {
    case 'SHOW_USERS':
      return action.userList

    default:
      return userList
  }
}
