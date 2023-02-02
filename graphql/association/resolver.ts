import AssociationService from "../../service/ServiceClass";

const userPartnerResolver = {
  Query: {
    greet() {
      return AssociationService.greet();
    },
    GetAllUsers() {
      return AssociationService.GetAllUsers();
    },
    GetparticularUser(parent: any, args: any, context: any) {
      return AssociationService.GetparticularUser(args.id);
    },
    GetUserByUUId(parent: any, args: any, context: any) {
      return AssociationService.GetUserBYUUId(args.UUId);
    },
    GetPartnerAssociationBYId(parent: any, args: any, context: any) {
      return AssociationService.GetPartnerAssociationBYId(args.id);
    },
    GetUsersFromAG_group() {
      return AssociationService.GetUsersFromAG_group();
    },
    GetUsersFromBABA_group() {
      return AssociationService.GetUsersFromBABA_group();
    },
    GetUserByP_M16A4() {
      return AssociationService.GetUserByP_M16A4();
    },
    GetUserByP_M416() {
      return AssociationService.GetUserByP_M416();
    },
  },
  Mutation: {
    createPartnerUser(parent: any, args: any, context: any) {
      const user = args.user;
      const partner = args.partner;
      return AssociationService.createAS_userandAS_partner(user, partner);
    },
    UpdateAS_user(parent: any, args: any, context: any) {
      return AssociationService.UpdateAS_user(args.id, args.updateuser);
    },
    changingPartnerForUser(parent: any, args: any, context: any) {
      return AssociationService.AssociateNewPartnerForUserByUserId(
        args.userId,
        args.updatepartner
      );
    },
    DeleteUserSoftBYId(parnet: any, args: any, context: any) {
      return AssociationService.DeleteUserSoftBYId(args.id);
    },
    RestoreSoftDeleteUserBYId(parent: any, args: any, context: any) {
      return AssociationService.RestoreSoftDeleteUserBYId(args.id);
    },
    DeleteUserPermanent(parent: any, args: any, context: any) {
      return AssociationService.DeleteUserPermanent(args.id);
    },
  },
};

export default userPartnerResolver;
