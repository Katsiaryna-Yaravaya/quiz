import { getAllUser } from "../../core/api";
import { saveUsers } from "../../redux/country/actions";

export const getAlLUsers = () => (dispatch) => {
  getAllUser().then((dataServer) => {
    dispatch(saveUsers(dataServer.data));
  });
};
