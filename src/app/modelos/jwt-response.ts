export interface IJWTResponse {
    datauser:
    {
        id:number,
        nombre:String,
        tipo:String,
        email:String,
        accessToken:String,
        expireIn:String
    }
}
