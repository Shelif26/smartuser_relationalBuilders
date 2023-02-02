import { DBConnection } from "../resource/DataSource";
import { AS_Partner } from "../entities/partner";
import { AS_user } from "../entities/user";
import { as_groups } from "../enums/association.AS_groups";
import { BABA_Groups } from "../enums/association.BABA_group";
import { M16A4 } from "../enums/association.M16A4";
import { M416 } from "../enums/association.M416";

const as_user = DBConnection.getRepository(AS_user);
const as_partner = DBConnection.getRepository(AS_Partner);

class AssociationService {
  public static greet() {
    return "This is As_user AS_partner Associatoin";
  }

  public static async createAS_userandAS_partner(
    user: AS_user,
    partner: AS_Partner
  ) {
    const create = await as_user.save(user);
    partner.user = create;
    await as_partner.save(partner);
    console.log(partner);

    return `Great work ${partner.Partner} from ${partner.Association} you have successfully added ${create.FirstName} as your user Congrats!`;
  }

  public static async UpdateAS_user(
    id: number,
    input: {
      FirstName: any;
      SecondName: any;
      Email: any;
      Mob_no: any;
      Association: any;
      Partner: any;
      PartnerID: any;
    }
  ) {
    const update = await as_user
      .createQueryBuilder("AS_user")
      .where("id=:ID", { ID: id })
      .getOne();
    if (!update) {
      return `no data found this ID:${id}`;
    }
    const data = await as_user
      .createQueryBuilder()
      .update({
        FirstName: input.FirstName,
        SecondName: input.SecondName,
        Email: input.Email,
        Mob_no: input.Mob_no,
      })
      .execute();
    return `user with ID:${id} have update by replacing Name : ${update.FirstName} , Email : ${update.Email} , Mob_no : ${update.Mob_no}  `;
  }

  public static async AssociateNewPartnerForUserByUserId(userId:number,input:{
    Association :any,
    Partner : any, 
    PartnerID : any ,
  }){
    const update = await as_partner
      .createQueryBuilder("AS_Partner")
      .where("userId=:ID", { ID: userId })
      .getOne();
      console.log("-------------fjsfzg-------------");
      
    if (!update) {
      return `no data found this ID:${userId}`;
    }
    const data = await as_partner
      .createQueryBuilder()
      .update({
        Association: input.Association,
        Partner: input.Partner,
        PartnerID: input.PartnerID,
      })
      .execute();
    return `updated-------------> `;
  }

  public static async DeleteUserSoftBYId(id: number) {
    const softDelete = await as_user
      .createQueryBuilder("AS_user")
      .softDelete()
      .where("id=:ID", { ID: id })
      .execute();
    return `user with ID : ${id} is have been soft deleted`;
  }

  public static async RestoreSoftDeleteUserBYId(id: number) {
    const RestoreSoftDeleteUserBYId = await as_user
      .createQueryBuilder("AS_user")
      .restore()
      .where("id=:ID", { ID: id })
      .execute();
    return `user with ID : ${id} is have been restored successfully`;
  }
  public static async DeleteUserPermanent(id: number) {
    const Deleteuser = await as_user
      .createQueryBuilder("AS_user")
      .delete()
      .where("id = :ID", { ID: id })
      .execute();
    return `user with ID : ${id} have been deleted permanently`;
  }

  public static async GetAllUsers() {
    const Users_partners = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "Users_partners")
      .getMany();
    return Users_partners;
  }

  public static async GetparticularUser(id: number) {
    const user = await as_user
      .createQueryBuilder("AS_user")
      .where("AS_user.id = :userid", { userid: id })
      .getOne();
    if (id == user?.id) {
      return user;
    }
  }

  public static async GetPartnerAssociationBYId(id: number) {
    const partner = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .where("AS_Partner.id = :partnerid", { partnerid: id })
      .getOne();
    console.log(partner);
    return partner;
  }

  public static async GetUsersFromAG_group() {
    const AS_Group = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Association: as_groups.AS_Group } })
      .getMany();
    console.log(AS_Group);
    return AS_Group;
  }

  public static async GetUsersFromBABA_group() {
    const BABA_Group = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Association: BABA_Groups.BABA_Group } })
      .getMany();
    console.log(BABA_Group);
    return BABA_Group;
  }

  public static async GetUserByP_M16A4() {
    const P_M16A4 = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Partner: M16A4.m16a4 } })
      .getMany();
    console.log(P_M16A4);
    return P_M16A4;
  }

  public static async GetUserByP_M416() {
    const P_M416 = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Partner: M416.m416 } })
      .getMany();
    console.log(P_M416);
    return P_M416;
  }

  public static async GetUserBYUUId(UUId: String) {
    const UUId_ = await as_user
      .createQueryBuilder("AS_user")
      .where("AS_user.UUId = :uuid", { uuid: UUId })
      .getOne();
    console.log(UUId_);
    return UUId_;
  }
}

export default AssociationService;
