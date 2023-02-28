import { setToken, removeToken } from "../helpers/AuthToken";
import createDataContext from "./createDataContext";
import axiosInstance from "../helpers/axiosInstance";

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        showToast: false,
        message: "",
      };
    case "sendrequest":
      return {
        ...state,
        username: "",
        isLoading: true,
        showToast: false,
        isSignout: true,
        userToken: null,
        message: "",
      };
    case "signout":
      return {
        username: "",
        isLoading: false,
        showToast: false,
        isSignout: true,
        userToken: null,
        message: "",
      };
    case "signinerror":
      return {
        username: "",
        isLoading: false,
        showToast: true,
        isSignout: true,
        userToken: null,
        message: action.payload.message,
      };
    case "signin":
    case "signup":
      return {
        userToken: action.payload.userToken,

        isLoading: false,
        isSignout: false,
        showToast: false,

        username: action.payload.username,
        profile: {
          UserName: action.payload.username,
          Password: action.payload.username,
          SellerName: action.payload.SellerName,
          Image: action.payload.Image,
          FirstName: action.payload.FirstName,
          LastName: action.payload.LastName,
        },
      };
    case "showerror":
      return {
        ...state,
        isLoading: false,
        showToast: true,
        message: action.payload.message,
      };
    case "dashboard":
      return {
        ...state,
        isLoading: false,
        showToast: false,
        dashboard: action.payload.dashboard,
      };
    case "groups":
      return {
        ...state,
        isLoading: false,
        showToast: false,
        groups: action.payload.groups,
      };
    case "brands":
      return {
        ...state,
        isLoading: false,
        showToast: false,
        brands: action.payload.brands,
      };

    case "showorders":
      return {
        ...state,
        showToast: false,
        isLoading: false,
        orders: action.payload.orders,
        message: "",
      };
    case "showproducts":
      return {
        ...state,
        showToast: false,
        isLoading: false,
        products: action.payload.products,
        message: "",
      };
    case "findproducts":
      return {
        ...state,
        showToast: false,
        isLoading: false,
        sellerproducts: action.payload.products,
        message: "",
      };
    case "updatesellerproduct":
    case "addsellerproduct":
      console.log("payload", action.payload.result.Message);
      return {
        ...state,
        isLoading: false,
        showToast: true,
        message: action.payload.result.Message,
      };
    case "forgetpassword":
      return {
        userToken: null,
        isLoading: false,
        showToast: false,
        message: action.payload.result.Message,
      };

    default:
      return state;
  }
};

const Toast = (dispatch) => {
  return ({ message }) => {
    dispatch({
      type: "showerror",
      payload: {
        message: message,
      },
    });
  };
};
const signup = (dispatch) => {
  return ({ username, password }) => {
    console.log("Signup");
  };
};

const signin = (dispatch) => {
  return ({ username, password }) => {
    dispatch({ type: "sendrequest", payload: {} });
    removeToken();
    // Do some API Request here
    console.log("authenticate....");

    axiosInstance
      .post("/account/authenticate", {
        username,
        password,
      })
      .then((res) => {
        let token = res.data.token;

        dispatch({
          type: "signin",
          payload: {
            userToken: token,

            ...res.data,
            username,
            password,
          },
        });
        setToken(token);
      })
      .catch((err) => {
        removeToken();
        console.log("signinerror", err);
        dispatch({
          type: "signinerror",
          payload: {
            message: "شماره موبایل شما ثبت نشده",
            username: "",
            userToken: "",
          },
        });
      });
  };
};

const signout = (dispatch) => {
  return () => {
    dispatch({ type: "signout" });
  };
};
const forgetpassword = (dispatch) => {
  return ({ mobile }) => {
    removeToken();
    dispatch({ type: "sendrequest", payload: {} });

    // Do some API Request here
    console.log("resetPass....");

    axiosInstance
      .post("/account/forgetpassword", {
        mobile,
      })
      .then((res) => {
        dispatch({
          type: "forgetpassword",
          payload: {
            result: res.data,
          },
        });
      })
      .catch((err) => {
        removeToken();
        console.log("signinerror", err);
        dispatch({
          type: "signinerror",
          payload: {
            message: "شماره موبایل ثبت نشده",
            username: "",
            userToken: "",
          },
        });
      });
  };
};
const dashboard = (dispatch) => {
  return () => {
    // Do some API Request here
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .get("/products/dashboard")
      .then((res) => {
        dispatch({
          type: "dashboard",
          payload: {
            dashboard: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT | Dashboard",
          },
        });
      });
  };
};

const Groups = (dispatch) => {
  return () => {
    // Do some API Request here

    axiosInstance
      .get("/groups/listgroups")
      .then((res) => {
        dispatch({
          type: "groups",
          payload: {
            groups: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT | Dashboard",
          },
        });
      });
  };
};

const Brands = (dispatch) => {
  return () => {
    // Do some API Request here

    axiosInstance
      .get("/brands/listbrands")
      .then((res) => {
        dispatch({
          type: "brands",
          payload: {
            brands: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT | Dashboard",
          },
        });
      });
  };
};

const showOrders = (dispatch) => {
  return ({ PayTypes, SentConditions, start, length }) => {
    // Do some API Request here
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .post("/orders/listsellerorders", {
        PayTypes,
        SentConditions,
        start,
        length,
      })
      .then((res) => {
        dispatch({
          type: "showorders",
          payload: {
            orders: res.data,
          },
        });
        // console.log(res.data);
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response ? err.response.data : "COULD NOT CONNECT",
          },
        });
      });
  };
};
const showProducts = (dispatch) => {
  return ({ start, length, BrandID, GroupID, searchText }) => {
    // Do some API Request here
    console.log("params :", { start, length, BrandID, GroupID, searchText });
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .post("/products/productslist", {
        start,
        length,
        BrandID,
        GroupID,
        searchText,
      })
      .then((res) => {
        console.log("res : ", res);
        dispatch({
          type: "showproducts",
          payload: {
            products: res.data,
          },
        });
      })
      .catch((err) => {
        console.log("errrrrr : ", err);
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT|Products",
          },
        });
      });
  };
};
const updatesellerproduct = (dispatch) => {
  return ({
    ProductID,
    Price,
    InStock,
    IsActive,
    PostageInterval,
    OrderQuantityLimit,
  }) => {
    // Do some API Request here
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .post("/products/updatesellerproduct", {
        ProductID,
        Price,
        InStock,
        IsActive,
        PostageInterval,
        OrderQuantityLimit,
      })
      .then((res) => {
        dispatch({
          type: "updatesellerproduct",
          payload: {
            result: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT|Products",
          },
        });
      });
  };
};
const findProducts = (dispatch) => {
  return ({ start, length, BrandID, GroupID, searchText }) => {
    // Do some API Request here
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .post("/products/listfindproducts", {
        start,
        length,
        BrandID,
        GroupID,
        searchText,
      })
      .then((res) => {
        dispatch({
          type: "findproducts",
          payload: {
            products: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT|Products",
          },
        });
      });
  };
};
const addsellerproduct = (dispatch) => {
  return ({
    ProductID,
    Price,
    InStock,
    Garranty,
    PostageInterval,
    OrderQuantityLimit,
  }) => {
    // Do some API Request here
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .post("/products/addsellerproduct", {
        ProductID,
        Price,
        InStock,
        Garranty,
        PostageInterval,
        OrderQuantityLimit,
      })
      .then((res) => {
        dispatch({
          type: "addsellerproduct",
          payload: {
            result: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT|Products",
          },
        });
      });
  };
};
const addsellerproduct111 = (dispatch) => {
  return ({
    ProductID,
    Price,
    InStock,
    Garranty,
    PostageInterval,
    OrderQuantityLimit,
  }) => {
    // Do some API Request here
    dispatch({ type: "loading", payload: {} });
    axiosInstance
      .post("/products/addsellerproduct", {
        ProductID,
        Price,
        InStock,
        Garranty,
        PostageInterval,
        OrderQuantityLimit,
      })
      .then((res) => {
        dispatch({
          type: "addsellerproduct",
          payload: {
            result: res.data,
          },
        });
        console.log("disadd", res.data);
      })
      .catch((err) => {
        dispatch({
          type: "showerror",
          payload: {
            message: err.response
              ? err.response.data
              : "COULD NOT CONNECT|Products",
          },
        });
      });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    Toast,
    signin,
    signout,
    signup,
    forgetpassword,
    dashboard,
    showOrders,
    showProducts,
    updatesellerproduct,
    findProducts,
    addsellerproduct,
    Brands,
    Groups,
  },
  {
    username: "",
    isLoading: false,
    showToast: false,
    isSignout: true,
    userToken: null,
    message: "",
    orders: { data: [], recordsFiltered: 0, recordsTotal: 0 },
    products: { data: [], recordsTotal: 0, recordsFiltered: 0 },
    sellerproducts: { data: [], recordsTotal: 0, recordsFiltered: 0 },
    profile: {
      UserName: "samadu",
      Password: "15464",
      SellerName: "sdfkjsdjkfhsdh",
      Image: "",
      FirstName: "",
      LastName: "",
    },
    brands: [],
    groups: [],
    dashboard: {
      Accepted: 0,
      Add_Month: 0,
      CurWeek: 0,
      CurWeekCount: 0,
      InQueu: 0,
      Not_Accepted: 0,
      PastMonth: 0,
      PastMonthCount: 0,
      PastWeek: 0,
      PastWeekCount: 0,
      Tot_Sent_ToDay_And_Befor: 0,
      Tot_Sent_Tomarrow: 0,
      Tot_ToDay: 0,
    },
  }
);
