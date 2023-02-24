import { AccountModel } from "../models/accountModel"

export type AuthParams = {
    email:string
    password: string
}

export interface Auth {
    auth(params: AuthParams): Promise<AccountModel>
}