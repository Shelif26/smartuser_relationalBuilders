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
    login(parent: any, args: any, context: any) {
      return AssociationService.Authorization(args.Email, args.Mob_no);
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
    GetWizardsFromRavenClow() {
      return AssociationService.GetWizardsFromRavenClow();
    },
  },
  Mutation: {
    createWizards(parent: any, args: any, context: any) {
      const user = args.user;
      const partner = args.partner;
      return AssociationService.createAS_userandAS_partner(user, partner);
    },
    UpdateWizards(parent: any, args: any, context: any) {
      return AssociationService.UpdateAS_user(args.id, args.updateuser);
    },
    changingGrandWizardsForWizards(parent: any, args: any, context: any) {
      return AssociationService.AssociateNewPartnerForUserByUserId(
        args.userId,
        args.updatepartner
      );
    },
    ForgetPassword(parent: any, args: any, context: any) {
      return AssociationService.ForgetPassword(args.Email, args.password);
    },
    DeleteWizardSoftBYId(parnet: any, args: any, context: any) {
      return AssociationService.DeleteUserSoftBYId(args.id);
    },
    RestoreSoftDeleteWizardrBYId(parent: any, args: any, context: any) {
      return AssociationService.RestoreSoftDeleteUserBYId(args.id);
    },
    DeleteWizardPermanent(parent: any, args: any, context: any) {
      return AssociationService.DeleteUserPermanent(args.id);
    },
  },
};

export default userPartnerResolver;
