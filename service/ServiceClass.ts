import { DBConnection } from "../resource/DataSource";
import { AS_Partner } from "../entities/partner";
import { AS_user } from "../entities/user";
import { Griffindor } from "../enums/association.Griffindor";
import { Slytherin } from "../enums/association.Slytherin";
import { HufflePuff } from "../enums/association.HufflePuff";
import { RavenClow } from "../enums/association.RavenClow";

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
    console.log`${JSON.stringify(partner)}`;
    return `Great work ${partner.Partner} from ${partner.Association} house, you have successfully added ${create.FirstName} ${create.SecondName} from ${create.Country} in TownHall Congrats!`;
  }

  public static async UpdateAS_user(
    id: number,
    input: {
      FirstName: any;
      SecondName: any;
      Email: any;
      Mob_no: any;
      Gender: any;
      Street: any;
      Area: any;
      District: any;
      State: any;
      Country: any;
    }
  ) {
    const update = await as_user
      .createQueryBuilder("AS_user")
      .update(AS_user)
      .set({
        FirstName: input.FirstName,
        SecondName: input.SecondName,
        Email: input.Email,
        Mob_no: input.Mob_no,
        Gender: input.Gender,
        Street: input.Street,
        Area: input.Area,
        State: input.State,
        District: input.District,
        Country: input.Country,
      })
      .where("id=:ID", { ID: id })
      .execute();
    console.log`user have been updated : ${JSON.stringify(update)}`;
    return `user with ID:${id} have updated with Name: ${input.FirstName} ${input.SecondName}, Email : ${input.Email} , Mob_no : ${input.Mob_no}  `;
  }

  public static async ForgetPassword(
    Email: string,
    input: { password: string }
  ) {
    const FP = await as_user
      .createQueryBuilder("AS_user")
      .update(AS_user)
      .set({ FirstName: input.password })
      .where("Email=:email", { email: Email })
      .execute();
    return FP;
  }

  public static async AssociateNewPartnerForUserByUserId(
    userId: number,
    input: {
      Association: any;
      Partner: any;
      PartnerID: any;
    }
  ) {
    const update = await as_partner
      .createQueryBuilder("AS_Partner")
      .update(AS_Partner)
      .set({
        Association: input.Association,
        Partner: input.Partner,
        PartnerID: input.PartnerID,
      })
      .where("userId=:ID", { ID: userId })
      .execute();

    return `User with ID : ${userId} have updated`;
  }

  public static async DeleteUserSoftBYId(id: number) {
    const softDelete = await as_user
      .createQueryBuilder("AS_user")
      .softDelete()
      .where("id=:ID", { ID: id })
      .execute();
    if (id != id) {
      return `user with ID : ${id} doesn't exist`;
    }
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
    return `user with ID:${id} does not exist`;
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

  public static async GetWizardsFromGriffindor() {
    const AS_Group = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Association: Griffindor.Griffindor } })
      .getMany();
    console.log(AS_Group);
    return AS_Group;
  }

  public static async GetWizardsFromSlytherin() {
    const BABA_Group = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Association: Slytherin.Slytherin } })
      .getMany();
    console.log(BABA_Group);
    return BABA_Group;
  }

  public static async GetWizardsFromRavenClow() {
    const RV = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Association: RavenClow.RavenClow } })
      .getMany();
    console.log(RV);
    return RV;
  }

  public static async GetWizardsFromHafflePuff() {
    const HafflePuff = await as_partner
      .createQueryBuilder("AS_Partner")
      .leftJoinAndSelect("AS_Partner.user", "user")
      .setFindOptions({ where: { Association: HufflePuff.HufflePuff } })
      .getMany();
    console.log(HafflePuff);
    return HafflePuff;
  }

  public static async GetMasterWizards() {
    const masterwizard = await as_partner
      .createQueryBuilder("AS_Partner")
      .getMany();
    console.log(masterwizard);
    return masterwizard;
  }

  public static async GetUserBYUUId(UUId: String) {
    const UUId_ = await as_user
      .createQueryBuilder("AS_user")
      .where("AS_user.UUId = :uuid", { uuid: UUId })
      .getOne();
    console.log(UUId_);
    return UUId_;
  }
  public static async Authorization(Email: String, Mob_no: String) {
    const auth = await as_user
      .createQueryBuilder("AS_user")
      .where("AS_user.Email = :email", { email: Email })
      .andWhere("AS_user.Mob_no = :mob_no", { mob_no: Mob_no })
      .getOne();
    return `Hi good to see you again`;
  }
}

export default AssociationService;
