interface IUser{
    id: string,
    username: string,
    encPassword: string,
    token: string
}

type UserState = {
    user: Iuser | null
}

type UserAction = {
    type: string,
    user?: Iuser
}

type DispatchType = (args: UserAction) => UserAction