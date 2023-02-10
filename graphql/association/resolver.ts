import AssociationService from "../../service/ServiceClass";

const userPartnerResolver = {
  Query: {
    greet() {
      return AssociationService.greet();
    },
    GetAllWizards() {
      return AssociationService.GetAllUsers();
    },
    GetWizardById(parent: any, args: any, context: any) {
      return AssociationService.GetparticularUser(args.id);
    },
    GetWizardByUUId(parent: any, args: any, context: any) {
      return AssociationService.GetUserBYUUId(args.UUId);
    },
    GetLeadAssociationBYId(parent: any, args: any, context: any) {
      return AssociationService.GetPartnerAssociationBYId(args.id);
    },
    GetAllMasterWizard() {
      return AssociationService.GetMasterWizards();
    },
    GetWizardsFromGriffindor() {
      return AssociationService.GetWizardsFromGriffindor();
    },
    GetWizardsFromSlytherin() {
      return AssociationService.GetWizardsFromSlytherin();
    },
    GetWizardsFromHufflePuff() {
      return AssociationService.GetWizardsFromHafflePuff();
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
