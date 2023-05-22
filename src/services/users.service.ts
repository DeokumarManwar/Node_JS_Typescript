import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import userModel, { UserDocument } from "../models/user";

export function createUser(input: DocumentDefinition<UserDocument>) {
  return userModel.create(input);
}

export function findUser(
  query: FilterQuery<UserDocument>,
  options: QueryOptions = { lean: true }
) {
  return userModel.find(query, {}, options);
}

export function findAndUpdate(
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions
) {
  return userModel.findOneAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
  return userModel.deleteOne(query);
}
