plugin.tx_srfeuserregister_pi1 {

    # cat=plugin.tx_srfeuserregister_pi1/file; type=file[html,htm,tmpl,txt]; label= Template File: HTML-template file
  file.templateFile = EXT:sr_feuser_register/pi1/tx_srfeuserregister_pi1_css_tmpl.html

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Force file deletion: On record deletion, related images and files will be deleted even if the record is only marked 'deleted'
  forceFileDelete = 1

    # cat=plugin.tx_srfeuserregister_pi1/file; type=file[pdf,doc,sxw,txt]; label= Attachment file: File to be attached to the confirmation email.
  file.attachmentFile = EXT:sr_feuser_register/pi1/tx_srfeuserregister_pi1_sample.txt

    # cat=plugin.tx_srfeuserregister_pi1/file; type=file[pdf,doc,sxw,txt]; label= Terms file: File to be shown as the terms of usage.
  file.termsFile = EXT:sr_feuser_register/pi1/tx_srfeuserregister_pi1_terms.txt

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Terms url: Page (id or id,type) or url where the terms of usage are shown. If set, overrides terms file.
  termsUrl = term/

  # cat=plugin.tx_srfeuserregister_pi1/file; type=file[gif]; label= Icon used for deletion of uploaded files.
  file.icon_delete = EXT:sr_feuser_register/pi1/icon_delete.gif

    # cat=plugin.tx_srfeuserregister_pi1/file; type=file[css]; label= HTML emails stylesheet: If HTML emails are enabled, this file contains the CSS stylesheet to be incorporated in these mails.
  HTMLMailCSS = EXT:sr_feuser_register/pi1/tx_srfeuserregister_htmlmail_xhtml.css

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Administration email: Enter the administration email address here. This email address will be the sender email and also receive administration notifications.
  #email = noreply@spbkor1.ru
  email = varahi@yandex.ru

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Site name: Enter the name of the registering site here. If set, this will be used as the email address name in the mails sent as well as signature on the mails.
  siteName = Колледж олимпийсого резерва №1

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Registration form fields: List of fields to be included on the front end user registration form.
  #formFields = username, password, gender, first_name, last_name, status, date_of_birth, email, address, city, zone, static_info_country, zip, telephone, fax, language, title, company, www, module_sys_dmail_html, module_sys_dmail_newsletter, module_sys_dmail_category, image, comments, terms_acknowledged, disable

  formFields = username, password, first_name, last_name, email, comments, disable
  

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Required fields: List of fields that must be filled in on the front end user registration form.
  requiredFields = username, password, first_name, email

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Unsubscribe allowed fields: List of fields that are allowed to be updated by an UNSUBSCRIBE link without any login.
  unsubscribeAllowedFields = module_sys_dmail_newsletter

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Use email as username: If set, the user email will be used as the username.
  useEmailAsUsername = 0

      # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Generate the username: If set, the username is assumed to be generated. Appropriate hook must be configured.
  generateUsername = 0

      # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Do not enforce username: If set, field username is not forced to be part of formFields and requiredFields.
  doNotEnforceUsername = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Authentication code length: Length of the authentication codes. Direct Mail uses 8.
  codeLength = 12

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Name of the table: The name is used for the records in the frontend.
  tableName = fe_users

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Country onchange attribute: Javascript to execute when the selected country is changed in the country selector box.
  onChangeCountryAttribute = javascript:window.document.getElementById('tx-srfeuserregister-pi1-fe_users_form').submit();

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Front end user records PID: If the records edited/created are located in another page than the current, enter the PID of that page here.
  pid = 67

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= PID title override: If set, this will be used as the name of the System Folder containing the Front end user records when this name is used in online or email messages.
  pidTitleOverride =

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Registration page PID: PID of the page on which the plugin is inserted with the intent of serving as the front end user registration page.
  registerPID = 105

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= User groups records PID list: List of page id's on which user groups records may be located.
  userGroupsPidList =

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Profile editing page PID: PID of the page on which the plugin is inserted with the intent of serving as the front user profile editing page.
  editPID = 106

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Confirmation page PID: PID of the page on which the plugin is inserted with the intent of serving as the front end user confirmation page (or setfixed page!).
  confirmPID = 106

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Confirmation of invitation page PID: PID of the page on which the plugin is inserted with the intent of serving as the front end user confirmation page (or setfixed page!) when replying to an invitation.
  confirmInvitationPID =

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Confirmation page Type: Type (or pageNum) of the confirmation page.
  confirmType = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Login page PID: PID of the page on which the New login box plugin is inserted with the intent of serving as the front user login page.
  loginPID = 104

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Link to after edit PID: PID of the page to be linked to after the user has completed the edition of his/her profile.
  linkToPID = 106

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Add a button to link to after edit PID: If set, an additional button is displayed on the profile editing page to save the changes and link to the page specified by linkToPID.
  linkToPIDAddButton = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Default CODE: Default CODE, when not specified on the inserted plugin record. May be CREATE or EDIT or empty.
  defaultCODE = 

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable preview on registration: If set, the registration dialogue will include a preview of the front end user data before it is saved.
  enablePreviewRegister = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable preview on profile update: If set, the profile update dialogue will include a preview of the front end user data before it is saved.
  enablePreviewEdit = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable administrative review: If set, the site administrator will be asked to accept the registration before it becomes enabled.
  enableAdminReview = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email confirmation request: If set, an email will be sent to the prospective front end user requesting a confirmation of registration.
  enableEmailConfirmation = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on approval: If set, an email will be sent to the front end user when he(she) confirms his(her) registration.
  enableEmailOnApprove = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on refusal: If set, an email will be sent to the prospective front end user when he refuses to confirm his(her) registration.
  enableEmailOnRefuse = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on denial: If set, an email will be sent to the prospective front end user when the site administrator refuses to confirm his(her) registration.
  enableEmailOnAdminRefuse = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on registration: If set, an email will be sent to the front end user confirming his(her) registration. This is ignored if email confirmation request is enabled.
  enableEmailOnRegister = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on profile update: If set to 1, an email will be sent to the front end user to confirm the update of his profile. If set to 2, only the changed fields will be sent.
  enableEmailOnUpdate = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on delete: If set, an email will be sent to the front end user to confirm the deletion of his(her) account.
  enableEmailOnDelete = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable email on unsubscribe: If set, an email will be sent to the front end user end its subscription to newsletters through a link from a mailing application.
  enableEmailOnUnsubscribe = 1
 
    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on confirmation request: If set, an email will be sent to the site administration when a request for confirmation of registration is sent to a user.
  enableAdminNotifyConfirmation = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on approval: If set, an email will be sent to the site administration when a user confirms his(her) registration.
  enableAdminNotifyOnApprove = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on refusal: If set, an email will be sent to the site administration when a user refuses to confirm his(her) registration.
  enableAdminNotifyOnRefuse = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on registration: If set, an email will be sent to the site administration when a user registers. This is ignored if email confirmation request is enabled.
  enableAdminNotifyOnRegister = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on update: If set, an email will be sent to the site administration when a user updates his(her) profile.
  enableAdminNotifyOnUpdate = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on deletion: If set, an email will be sent to the site administration when a user deletes his(her) account.
  enableAdminNotifyOnDelete = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on entering: If set, an email will be sent to the site administration when a user clicks on the link to log in.
  enableAdminNotifyOnEnter = 0

     # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on approval by admin: If set, an email will be sent to the site administration when a registration is accepted by the administration.
  enableAdminNotifyOnAdminAccept = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable admin notification on refusal by admin: If set, an email will be sent to the site administration when a registration is refused by the administration.
  enableAdminNotifyOnAdminRefuse = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable HTML emails: If set, emails sent to the front end user will be sent in HTML format.
  enableHTMLMail = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable HTML email attachment: If set, the specified attachment file will be attached to the confirmation HTML email.
  enableEmailAttachment = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable auto-login on confirmation: If set, the user will be automatically logged in upon confirmation of his(her) registration.
  enableAutoLoginOnConfirmation = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable auto-login on account creation: If set and if email confirmation is not set, the user will be automatically logged in upon creation of his(her) account.
  enableAutoLoginOnCreate = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Redirect_url on login: Url to which the user may be redirected to upon login, when auto login is enabled.
  autoLoginRedirect_url =

    # cat=plugin.tx_srfeuserregister_pi1//; type=boolean; label= Direct Mail checked upon registration: The checkboxes for Direct Mail categories will be checked by default if you set this.
  dmailCheckedUponRegistration = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= User group(s) upon registration: The value of the user group field. Must be a list of integers WITHOUT spaces between the comma separated values! Furthermore these integers MUST belong to actual fe_groups records!
  userGroupUponRegistration = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= User group(s) after confirmation: The value of the user group(s) assigned to the front end user after receipt of his(her) confirmation.
  userGroupAfterConfirmation = 1

      # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= User group(s) after acceptation: The value of the user group(s) assigned to the front end user after acceptation of his(her) registration when the administrative review is enabled.
  userGroupAfterAcceptation = 1

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Allow selection of usergroup on registration: If set, the user may select to adhere to user group(s) when registrating.
  allowUserGroupSelection = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Allow selection of usergroup on edition: If set, the user may edit the list of user groups to which he(she) belongs.
  allowUserGroupUpdate = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Allow selection of multiple usergroups: If set, the user may select to adhere to multiple user groups.
  allowMultipleUserGroupSelection = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=string; label= Allowed user groups: Comma separated list of user groups to be selectable. If 'ALL', then all groups are allowed.
  allowedUserGroups = ALL

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=string; label= Allowed user subgroups: Comma separated list of subgroups from which all user groups shall be selectable. The user groups from allowedUserGroups shall be added also.
  allowedSubgroups =

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=string; label= Denied user groups: Comma separated list of user groups to be never selectable. These user groups supersede the user groups resulting from allowedUserGroups and allowedSubgroups.
  deniedUserGroups =

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Keep unselectable user groups: If set then the user groups which the TYPO3 admin has assigned are not removed after editing.
  keepUnselectableUserGroups = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Minimum password length: The minimum number of characters that the password must contain.
  passwordAtLeast = 3

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Maximum password length: The maximum number of characters that the password may contain.
  passwordAtMost = 20

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Minimum username length: The minimum number of characters that the username must contain.
  usernameAtLeast = 3

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Maximum username length: The maximum number of characters that the username may contain.
  usernameAtMost = 50

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Maximum name length: The maximum number of characters that the name of the front end user may contain.
  nameAtMost = 80

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label= Number of images: Number of images that may be uploaded (should be smaller than 7).
  maxImages = 1

    # cat=plugin.tx_srfeuserregister_pi1//; type=options[,formal,informal]; label= Salutation mode to use: Possible value are 'formal' or 'informal'.
  salutation =

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= PID list for Direct Mail categories: The Direct mail categories used by the plugin will be restricted to those found in these PID's.
  #module_sys_dmail_category_PIDLIST = 40

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label=Use short URL's: If set, the use of short URL's in email messages sent to users is enabled.
  useShortUrls = 1

    # cat=plugin.tx_srfeuserregister_pi1//; type=int+; label=Short URL cache lifespan: Number of days that short URL's will be kept in the DB. After this delay, the short URL's will be removed. Confirmation URL's included in email messages older than this number of days will not work.
  shortUrlLife = 30

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Enable localization: If set, only localized records are shown.
  useLocalization = 0

    # cat=plugin.tx_srfeuserregister_pi1/enable; type=boolean; label= Local country: If set, the country names are shown in their local languages
  useLocalCountry = 0

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Date Format (d-m-y)
  dateFormat = d-m-Y

    # cat=plugin.tx_srfeuserregister_pi1//; type=string; label= Split char for Date Format (-)
  dateSplit = -
}



plugin.tx_dixeasylogin_pi1 {
    # if jQuery, jQueryUI and the lightness theme should be included by default. 
    # if turned off, you have to take care for yourself that the libraries are loaded (smart if other extensions also include jQuery)
  include_jQuery = 0

    # if the user should be created when not already found in the database
  allowCreate = 1

    # if the user should be able to connect his login with a login provider when already authenticated
  allowUpdate = 1

    # where the fe_users records should be stored when created
  user_pid = 19
  
    # when a user is created, he will get this usergroup(s)
  usergroup = 1
  
    # page where the "easylogin" plugin is located
    # used for the xrds definition
  pid_loginPage = 104
  
    # uid of the common login
  uid_felogin = 104
  
    # register a facebook app to get these two values
  #facebook_appID =  229076473905078
  #facebook_appSecret =  8b8ea717bea35e37a54952a6f57266a9
  
    # register a twitter app to get these two values
  #twitter_consumerKey = E7jyX4hF9JTBumxFQ99hyQ
  #twitter_consumerSecret = FXeKHkqYsZu6RYwbsFEXIxZI5NrYOhyYuFsWzPXVII

    # register a xing app to get these two values
  #xing_consumerKey = eab9b2297f232f2d0443
  #xing_consumerSecret = 6fd7ba3b3619678564063f0fc4fe4463aa8956a4
  
    # enable or disable login methods
  disable.felogin = 0
  disable.google = 0
  disable.yahoo = 1
  disable.myopenid = 1
  disable.wordpress = 1
  disable.facebook = 0
  disable.twitter = 0
  disable.xing = 1
  
}