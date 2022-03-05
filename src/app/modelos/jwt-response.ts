export interface IJWTResponse {
    datauser:
    {
        id:number,
        nombre:string,
        tipo:string,
        email:string,
        accessToken:string,
        expireIn:string
    }
}
