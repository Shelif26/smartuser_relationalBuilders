export const typeDef = `

type as_user{

    id : Int
    FirstName : String
    SecondName : String
    UUId : String
    Email : String
    Mob_no : String
    Gender : String
    Area : String
    District : String
    Street : String
    State : String
    Country : String
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
    Gender : String
    Area : String
    District : String
    Street : String
    State : String
    Country : String
}

input as_userupdate{
    FirstName : String
    SecondName : String
    Email : String
    Mob_no : String
    Gender : String
    Area : String
    District : String
    Street : String
    State : String
    Country : String
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
 
input forgetpassword{
    Email : String
    password : String
}

type Mutation{
    createWizards(user : as_userinput , partner : as_partnerinput) : String
    UpdateWizards(id:Int , updateuser : as_userupdate ) : String
    changingGrandWizardsForWizards(userId : Int, updatepartner : as_partnerupdate) : String
    ForgetPassword(Email : forgetpassword, password : forgetpassword) : String
    DeleteWizardSoftBYId(id:Int) : String!
    RestoreSoftDeleteWizardrBYId(id:Int) : String!
    DeleteWizardPermanent(id:Int) : String!
}

type Query {
    greet : String!
    login(Email:String, Mob_no:String) : as_user!
    GetAllWizards : [as_partner]
    GetAllMasterWizard : [as_partner]
    GetWizardById(id:Int) : as_user!
    GetWizardByUUId(UUId:String) : as_user!
    GetLeadAssociationBYId(id:Int) : as_partner!
    GetWizardsFromGriffindor : [as_partner]
    GetWizardsFromSlytherin : [as_partner]
    GetWizardsFromHufflePuff : [as_partner]
    GetWizardsFromRavenClow :  [as_partner]
}
`;
