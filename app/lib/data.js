import {User} from "./models";
import {connectToDB} from "./utils";

export const fetchUserInfo = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id)
        console.log(user)
        return user;
    } catch (error) {
        throw new Error("Failed to fetch!");
    }
};