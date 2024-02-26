interface AuthState {
    getLoggedInUserDetails: any; // Define the type of getLoggedInUserDetails
    getSentOTPMsg: any; // Define the type of getSentOTPMsg
    loginAsUserOrMerchant: string; // Define the type of loginAsUserOrMerchant
  }
  
  interface AuthAction {
    type: string;
    payload?: any;
  }
  
  const initState: AuthState = {
    getLoggedInUserDetails: null,
    getSentOTPMsg: {},
    loginAsUserOrMerchant: "",
  };
  
  export const Authentication = (state: AuthState = initState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "LOGIN_WITH_JWT":
        return { ...state, getLoggedInUserDetails: action?.payload };
      case "SEND_OTP":
        return { ...state, getSentOTPMsg: action?.payload };
      case "LOGIN_AS_USER_OR_MERCHANT":
        return { ...state, loginAsUserOrMerchant: action?.payload };
    //   case "LOGIN_WITH_JWT_FAILED":
    //     return { ...state, values: action?.payload }; // Should this be values or getLoggedInUserDetails?
      default:
        return state;
    }
  };
  