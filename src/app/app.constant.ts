export class Appconstants {

  /**DEV  */
     public static SERVER_URL='https://vestige2dev.vinculumgroup.com/api/';

    public static getServerUrl(){
    return Appconstants.SERVER_URL
    }

  /**API END POINT URL'S */
   public static API_BASE_URL = Appconstants.getServerUrl();
   public static API_MASTER_PARAM = Appconstants.getServerUrl()+'tbd';

   /**BEARER TOKEN */
   public static LOGIN_BEARER_TOKENTOKEN = 'ToBeDecided';

  /**SYSTEMS CONSTANT */
  public static PARAMS_REQ = 'ParamsRequired';

  /** API PATHS */
  public static GET_Distributor = '/getDistributor';

  /** API RESPONSE CODES */
  public static SUCCESS_RESPONSE_CODE = '200';
  public static FAILURE_RESPONSE_CODE = '400';
  public static FORBIDDEN_RESPONSE_CODE = '403';
  public static ERROR_RESPONSE_CODE = '500';
  public static UNAUTHORIZED_RESPONSE_CODE = '401';

}



