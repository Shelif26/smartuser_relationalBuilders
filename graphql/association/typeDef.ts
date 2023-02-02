export const typeDef = `

type as_user{

    id : Int
    FirstName : String
    SecondName : String
    UUId : String
    Email : String
    Mob_no : String

}

type as_partner {
    id : Int
    Association : String
    Partner : String
    PartnerID : String
    user : as_user
}

input as_userinput{
    FirstName : String
    SecondName : String
    UUId : String
    Email : String
    Mob_no : String
}

input as_userupdate{
    FirstName : String
    SecondName : String
    Email : String
    Mob_no : String
}

input as_partnerinput{
    Association : String
    Partner : String
    PartnerID : String
}

input as_partnerupdate{
    Association : String
    Partner : String
    PartnerID : String 
}

type Mutation{
    createPartnerUser(user : as_userinput , partner : as_partnerinput) : String
    UpdateAS_user(id:Int , updateuser : as_userupdate ) : String
    changingPartnerForUser(userId : Int, updatepartner : as_partnerupdate) : String
    DeleteUserSoftBYId(id:Int) : String!
    RestoreSoftDeleteUserBYId(id:Int) : String!
    DeleteUserPermanent(id:Int) : String!
}

type Query {
    greet : String!
    GetAllUsers : [as_partner]
    GetparticularUser(id:Int) : as_user!
    GetUserByUUId(UUId:String) : as_user!
    GetPartnerAssociationBYId(id:Int) : as_partner!
    GetUsersFromAG_group : [as_partner]
    GetUsersFromBABA_group : [as_partner]
    GetUserByP_M16A4: [as_partner]
    GetUserByP_M416: [as_partner]
}

`;
