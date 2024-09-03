import user from "../models/users.js";

class UserService {
    async createUser(data) {
        return await user.create(data);
    }

    async getUserById(id) {
        return await user.findByPk(id);
    }

    async getAllUsers() {
        return await user.findAll();
    }

    async updateUser(id, data) {
        const resultUser = await user.findByPk(id);
        if (!resultUser) {
            throw new Error('User not found');
        }
        return await resultUser.update(data);
    }

    async deleteUser(id) {
        const resultUser = await user.findByPk(id);
        if (!resultUser) {
            throw new Error('User not found');
        }
        return await resultUser.destroy();
    }
}

const userService = new UserService()
export default userService;
