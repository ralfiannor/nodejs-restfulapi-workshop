const UserModel = require('../models/users');

class UserService {
  async get (params) {
    let option = {};

    if (params.email) {
      option.email = params.email;
    }

    const getUser = await UserModel.find(option);
    return getUser;
  }

  async getById (id) {
    const getUser = await UserModel.findById(id);
    if (!getUser) {
      throw ({status: 404, message: 'User not found'});
    }
    return getUser;
  }

  async create (params) {
    let createUser = await UserModel.create(params);
    return createUser;
  }

  async update (id, params) {
    const option = {
      _id: id
    };
    await UserModel.updateOne(option, params);
    return this.getById(id);
  }

  async delete (id) {
    const getUser = await this.getById(id);
    const response = {
      status: 200,
      message: 'Data successfull deleted',
      data: getUser
    };
    await UserModel.deleteOne(getUser);
    return response;
  }
}

module.exports = new UserService;